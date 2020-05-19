import React from 'react';
import { Button, KeyboardAvoidingView, Text } from 'react-native';

import {
  Container,
  Header,
  Message,
  List,
  Logo2,
  Logo3,
  Form,
  Label,
  Input,
  CreateAccountView,
} from './styles';

import horde from '../../assets/horde.jpg';
import ally from '../../assets/ally.jpg';

const CreateAccount = () => {
  return (
    <Container>
      <Header>
        <Message>Four years have passed....</Message>

        <Message>Though Azeroth was saved....</Message>

        <Message>The drums of war thunder once again....</Message>
      </Header>

      <List>
        <Logo2 source={horde} />
        <Logo3 source={ally} />
      </List>

      <Form>
        <Label>Name</Label>
        <Input autoCorrect={false} autoCapitalize="none" returnKeyType="next" />
        <Label>E-mail</Label>

        <Input
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
        />
        <Label>Password</Label>

        <Input
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          returnKeyType="send"
        />
      </Form>

      <CreateAccountView>
        <Button title="Create Account" color="#1749CA" />
      </CreateAccountView>
    </Container>
  );
};

export default CreateAccount;
