import React from 'react';

import {
  Container
} from './text.styles'

import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({ users }) => (
  <Container>
    {users
      ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className='activeContainer'>
            <h2>
              {users.map(({ name }) => (
                <div key={name} className='activeItem'>
                  {name}
                  <img alt='Online Icon' src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      )
      : 
      <p>No users!</p>
    }
  </Container>
)

export default TextContainer
