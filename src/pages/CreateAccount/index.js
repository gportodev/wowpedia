import React from 'react';
import { Button, KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Header,
  Message,
  List,
  Logo1,
  Logo2,
  Logo3,
  Form,
  NickView,
  EmailView,
  Border,
  PasswordView,
  Input,
  CreateAccountView,
} from './styles';

import wow from '../../assets/logo1.jpg';
import horde from '../../assets/horde.jpg';
import ally from '../../assets/ally.jpg';

const CreateAccount = () => {
  return (
    <Container>
      <List>
        <Logo2 source={horde} />
        <Logo3 source={ally} />
      </List>

      <KeyboardAvoidingView>
        <Form>
          <NickView>
            <Input
              style={{ color: '#FFFF' }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Name"
            />
          </NickView>

          <Border />

          <EmailView>
            <Input
              style={{ color: '#FFFF' }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Email adress"
            />
          </EmailView>

          <Border />

          <PasswordView>
            <Input
              style={{ color: '#FFFF' }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry
            />
          </PasswordView>

          <Border />
        </Form>
      </KeyboardAvoidingView>

      <CreateAccountView>
        <Button title="Create Account" color="#1749CA" />
      </CreateAccountView>

      <Header>
        <Message>The drums of war thunder once again...</Message>
      </Header>
    </Container>
  );
};

export default CreateAccount;
