import React, { Component } from 'react';
import { View, Button } from 'react-native';

import {
  ViewMain,
  Logo1,
  Logo2,
  GreetMessage,
  MessageOne,
  MessageTwo,
  LoginButtonView,
  SignUpText,
} from './styles';

import logo1 from '../../assets/logo1.jpg';
import logo2 from '../../assets/logo2.jpg';

export default class Main extends Component {
  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Login');
  };

  render() {
    // const { navigation } = this.props;

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
            <Button
              title="Login"
              color="#1749CA"
              onPress={this.handleNavigate}
            />
          </LoginButtonView>

          <View>
            <Button title="Create Account" color="#1749CA" />
          </View>

          <SignUpText>Don't have an account? Sign Up</SignUpText>
        </ViewMain>
      </>
    );
  }
}
