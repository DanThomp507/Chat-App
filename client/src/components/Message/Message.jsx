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
        <MessageBox>
          <MessageText>{ReactEmoji.emojify(text)}</MessageText>
        </MessageBox>
      </Container>
      :
      <Container>
        <MessageBox>
          <MessageText>{ReactEmoji.emojify(text)}</MessageText>
        </MessageBox>
        <SentText>{user}</SentText>
      </Container>
  )
}
export default Message