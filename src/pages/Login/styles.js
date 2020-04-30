/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: black;
`;

export const Logo = styled.Image`
  width: 400px;
  height: 400px;
  margin-top: 50px;
`;

export const Form = styled.View`

`;

export const EmailView = styled.View`
  margin-top: 20px;
`;

export const PasswordView = styled.View`
  margin-top: 40px;
`;

export const InputEmail = styled.TextInput.attrs({
  placeholderTextColor: '#FFFFFF',
})``;

export const BorderEmailView = styled.View`
`;

export const BorderEmail = styled.View`
  border-bottom-color: #f8f8f8;
  border-bottom-width: 1;
`;

export const InputPassword = styled.TextInput.attrs({
  placeholderTextColor: '#FFFFFF',
})``;

export const BorderPassword = styled.View`
  border-bottom-color: #f8f8f8;
  border-bottom-width: 1;
`;

export const ForgotView = styled.View`
  align-items: flex-end;
`;

export const Forgot = styled.Text`
  color: #347af0;
  margin-top: 15;
`;

export const ButtonView = styled.View`
  width: 200;
  height: 200;
  margin-top: 10;
  justify-content: center;
  align-self: center;
  /* align-items: center; */
`;

export const Button = styled.Button`
  height: 5px;
  width: 5px;
`;


