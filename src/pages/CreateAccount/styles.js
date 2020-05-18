/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: black;
`;

export const List = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10;
`;

export const Logo2 = styled.Image`
  width: 260;
  height: 200;
`;

export const Logo3 = styled.Image`
  width: 210;
  height: 200;
`;

export const Form = styled.View`
  margin-top: -20;
`;

export const NickView = styled.View`
  margin-top: 50px;
`;


export const EmailView = styled.View`
  margin-top: 50px;
`;

export const PasswordView = styled.View`
  margin-top: 50px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#FFFFFF',
})``;


export const Border = styled.View`
  border-bottom-color: #f8f8f8;
  border-bottom-width: 1;
`;

export const LoginButtonView = styled.View`
  width: 150;
  padding-top: 40;
`;

export const CreateAccountView = styled.View`
  width: 100%;
  padding-top: 50;
  align-items: center;
`;


export const Header = styled.View`
  align-self: center;
  margin-top: 50;
`;

export const Message = styled.Text`
  color: #FDB32A;
  fontSize: 22;
`;



