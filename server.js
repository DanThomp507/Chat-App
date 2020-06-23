const express = require('express');
const http = require('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(cors({credentials: true, origin: true}) );
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room })

    if (error) return callback(error)

    socket.join(user.room)
    socket.emit('message', { user: 'admin', text: `Welcome to ${user.room}, ${user.name}` })
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined` })

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })

    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)

    if (user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err.message);
  res.status(400).send(err.message)
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));