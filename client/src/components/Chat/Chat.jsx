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

const Chat = () => {
  return (
    <OuterContainer>
      
      <Container>
      <InfoBar />
      <TextContainer />
      <TextInput />
      </Container>
   
    </OuterContainer>
  )
}

export default Chat