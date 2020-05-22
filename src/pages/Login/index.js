import React from 'react';

import { Button } from 'react-native';

import { Container, Logo, Form, Input, ButtonView } from './styles';

import logo3 from '../../assets/logos/logo3.jpg';

const Login = () => {
  return (
    <Container>
      <Logo source={logo3} />
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Email"
          placeholderTextColor="#65279"
        />

        <Input
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor="#65279"
        />
      </Form>

      <ButtonView>
        <Button title="Login" color="#1749CA" />
      </ButtonView>
    </Container>
  );
};

export default Login;
