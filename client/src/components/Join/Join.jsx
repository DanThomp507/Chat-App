import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
  Container,
  SubContainer,
  Heading,
  Button,
  Input
} from './join.styles'

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container>

      <SubContainer>
        <Heading>Join</Heading>
        <div>
          <Input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <Input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <Button style={{marginTop: '20px'}} type="submit">Sign In</Button>
        </Link>
      </SubContainer>

    </Container>
  );
}