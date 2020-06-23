import React from 'react';

import {
  Form,
  Input,
  SendButton
} from './input.styles'

const TextInput = ({ setMessage, sendMessage, message }) => (
  <Form>
    <Input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <SendButton onClick={e => sendMessage(e)}>Send</SendButton>
  </Form>
)

export default TextInput;