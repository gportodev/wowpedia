import * as React from 'react';
import { StatusBar } from 'react-native';

import Route from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#696969" />
      <Route />
    </>
  );
}
