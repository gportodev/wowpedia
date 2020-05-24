import React, { Component } from 'react';
import { Button } from 'react-native';

import {
  ViewMain,
  Logo1,
  Logo2,
  GreetMessage,
  MessageOne,
  MessageTwo,
  LoginButtonView,
  CreateAccountView,
  SignUpText,
} from './styles';

import logo1 from '../../assets/logos/logo1.jpg';
import logo2 from '../../assets/logos/logo2.jpg';

export default class Main extends Component {
  Login = () => {
    const { navigation } = this.props;

    navigation.navigate('Login');
  };

  CreateAccount = () => {
    const { navigation } = this.props;

    navigation.navigate('CreateAccount');
  };

  ChooseYourSide = () => {
    const { navigation } = this.props;

    navigation.navigate('ChooseYourSide');
  };

  render() {
    return (
      <>
        <ViewMain>
          <Logo1 source={logo1} />
          <Logo2 source={logo2} />
          <GreetMessage>
            <MessageOne>Greetings Friend!</MessageOne>

            <MessageTwo>Welcome....</MessageTwo>
          </GreetMessage>

          <LoginButtonView>
            <Button title="Login" color="#1749CA" onPress={this.Login} />
          </LoginButtonView>

          <CreateAccountView>
            <Button
              title="Create Account"
              color="#1749CA"
              onPress={this.CreateAccount}
            />
          </CreateAccountView>

          <SignUpText>Don't have an account? Sign Up</SignUpText>
        </ViewMain>
      </>
    );
  }
}
