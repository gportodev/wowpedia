import React, { useState } from 'react';

import { Button } from 'react-native';

import { Container, Logo, Form, Input, ButtonView } from './styles';

import logo3 from '../../assets/logos/logo3.jpg';

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  let passwordInput = '';

  return (
    <Container>
      <Logo source={logo3} />
      <Form>
        <Input
          value={state.email}
          onChangeText={(text) => setState({ email: text })}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Email"
          placeholderTextColor="#65279"
          autoFocus
          onSubmitEditing={() => passwordInput.focus()}
        />

        <Input
          value={state.password}
          onChangeText={(text) => setState({ password: text })}
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#65279"
          ref={(el) => {
            passwordInput = el;
          }}
        />
      </Form>

      <ButtonView>
        <Button title="Login" color="#1749CA" />
      </ButtonView>
    </Container>
  );
}
