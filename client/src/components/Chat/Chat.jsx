import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../Text/Text';
import InfoBar from '../InfoBar/Info'
import TextInput from '../Input/Input'

import {
  OuterContainer,
  Container
} from './chat.styles'

let socket;

const Chat = ({ location }) => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const ENDPOINT = '127.0.0.1:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    // socket = io(ENDPOINT)
    socket = io(ENDPOINT, {
    reconnectionAttemps: 10,
    transports: ['websocket'],
});

    setRoom(room)
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error)
      }
    })
  }, [ENDPOINT, location.Chatsearch])

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }
  return (
    <OuterContainer>
      
      <Container>
      <InfoBar room={room} />
      <TextInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </Container>

      <TextContainer users={users} />
   
    </OuterContainer>
  )
}

export default Chat