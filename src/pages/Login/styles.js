/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: black;
`;

export const Logo = styled.Image`
  resizeMode: contain;
  width: 100%;
  height: 250;
  margin-top: 50;
`;

export const Form = styled.View`
  margin-top: 10;
  align-items: center;
`;

export const ButtonView = styled.View`
  width: 200;
  height: 200;
  padding-top: 30;
  align-self: center;
`;

export const Label = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #FDB32A;
  margin-bottom: 10;
`;

export const Input = styled.TextInput`
  background-color: #353940;
  border-width: 1;
  border-color: #717175;
  border-radius: 5;
  height: 34;
  color: #FFFF;
  width: 200;
  margin-top: 10;
  margin-bottom: 15;
  padding-left: 10;
`;



