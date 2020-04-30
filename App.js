import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Src from './src/index'

export default function App() {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#696969" />
      <Src/>
    </>
  );
};
