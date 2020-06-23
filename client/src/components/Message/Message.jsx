import React from 'react'

import ReactEmoji from 'react-emoji'

import {
  Container,
  MessageBox,
  MessageText,
  SentText
} from './message.styles'

const Message = ({ message: { text, user }, name }) => {
  let currentUser = false

  const trimmed = name.trim().toLowerCase()

  if (user === trimmed) {
    currentUser = true
  }
  return (
    currentUser
      ?
      <Container>
        <SentText>{trimmed}</SentText>
        <MessageBox style={currentUser ? { background: '#2979FF' } : null}>
          <MessageText style={currentUser ?  { color: 'white' } : null}>{ReactEmoji.emojify(text)}</MessageText>
        </MessageBox>
      </Container>
      :
      <Container style={!currentUser ? { justifyContent: 'flex-start' } : null}>
        <MessageBox style={!currentUser ? { color: 'black'} : null}>
          <MessageText style={!currentUser ? { color: 'black !important' } : null}>{ReactEmoji.emojify(text)}</MessageText>
        </MessageBox>
        <SentText>{user}</SentText>
      </Container>
  )
}
export default Message