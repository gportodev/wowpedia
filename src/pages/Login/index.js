import React from 'react';

import {
  Container,
  Logo,
  Form,
  InputEmail,
  InputPassword,
  Button,
  Forgot,
  ButtonView,
  EmailView,
  PasswordView,
  BorderEmail,
  BorderPassword,
  ForgotView,
} from './styles';

import logo3 from '../../assets/logo3.jpg';

export default function Login() {
  return (
    <>
      <Container>
        <Logo source={logo3} />
        <Form>
          <EmailView>
            <InputEmail
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Email adress"
            />
          </EmailView>

          <BorderEmail />

          <PasswordView>
            <InputPassword
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
            />
          </PasswordView>

          <BorderPassword />

          <ForgotView>
            <Forgot>Forgot your password?</Forgot>
          </ForgotView>
        </Form>
        <ButtonView>
          <Button title="Login" />
        </ButtonView>
      </Container>
    </>
  );
}
