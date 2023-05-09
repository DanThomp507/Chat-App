let users = [];

// adding user to chat room
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  // all usernames in the room must be unique
  if (existingUser) return { error: 'Username is already taken!' };

  // error handling - username and room are required
  if (!name || !room) return { error: 'Both username and room are required.' };

  const user = { id, name, room };

  // add users to empty user array
  users.push(user);

  // return user
  return { user };
};

// removing user from chat room

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

// finding a specific user
const getUser = (id) => users.find((user) => user.id === id);

// finding users in specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);
module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
