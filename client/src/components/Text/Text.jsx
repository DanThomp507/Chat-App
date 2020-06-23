import React from 'react';

import {
  Container,
  ActiveContainer,
  ActiveItem
} from './text.styles'

import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({ users }) => (
  <Container>
    {users
      ?
      <div>
        <h1>People currently chatting:</h1>
        
        <ActiveContainer>
          <h2>
            {users.map(({ name }) => (
              <ActiveItem key={name}>
                {name}
                <img alt='Online Icon' src={onlineIcon} />
              </ActiveItem>
            ))}
          </h2>
        </ActiveContainer>

      </div>
      :
      <p>No users!</p>
    }
  </Container>
)

export default TextContainer
