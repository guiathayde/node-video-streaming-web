import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { Container, Input, Button } from './styles';

export function Login() {
  const { login } = useAuth();

  const [password, setPassword] = useState('');

  return (
    <Container>
      <Input
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button onClick={() => login(password)}>Enviar</Button>
    </Container>
  );
}
