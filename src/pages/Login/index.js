import React, { Component } from 'react';

import { Button } from 'react-native';

import {
  Container,
  Logo,
  Form,
  InputEmail,
  InputPassword,
  Forgot,
  ButtonView,
  EmailView,
  BorderEmail,
  PasswordView,
  BorderPassword,
  ForgotView,
} from './styles';

import logo3 from '../../assets/logo3.jpg';

export default class Login extends Component {
  render() {
    return (
      <>
        <Container>
          <Logo source={logo3} />
          <Form>
            <EmailView>
              <InputEmail
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email address"
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
          </Form>

          <ForgotView>
            <Forgot>Forgot your password?</Forgot>
          </ForgotView>

          <ButtonView>
            <Button title="Login" color="#1749CA" />
          </ButtonView>
        </Container>
      </>
    );
  }
}
