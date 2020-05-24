import * as React from 'react';
import { Button } from 'react-native';

import { Container, Logo1, Form, Input, Header, BView } from './styles';

import wow from '../../assets/logos/wow.png';

export default function CreateAccount({ navigation }) {
  function navigateToSide() {
    navigation.navigate('ChooseYourSide');
  }

  return (
    <Container>
      <Logo1 source={wow} />
      <Header>Four years have passed....</Header>
      <Header>Though Azeroth was saved....</Header>
      <Header>The drums of war thunder once again....</Header>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Nickname"
          placeholderTextColor="#65279"
        />

        <Input
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder="Email"
          placeholderTextColor="#65279"
        />

        <Input
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          returnKeyType="send"
          placeholder="Password"
          placeholderTextColor="#65279"
        />
      </Form>
      <BView>
        <Button title="Next" color="#1749CA" onPress={navigateToSide} />
      </BView>
    </Container>
  );
}
