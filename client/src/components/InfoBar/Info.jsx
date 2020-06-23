import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import {
  Container,
  LeftInnerContainer,
  RightInnerContainer
} from './info.styles'

const InfoBar = ({ room }) => (
  <Container>

    <LeftInnerContainer>
      <img className='onlineIcon' src={onlineIcon} alt='online icon' />
      <h3>{room}</h3>
    </LeftInnerContainer>

    <RightInnerContainer>
      <a href='/'><img src={closeIcon} alt='close icon' /></a>
    </RightInnerContainer>

  </Container>
);

export default InfoBar;