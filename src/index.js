import React from 'react';
import { StatusBar } from 'react-native';

import Main from './pages/Main';
import Login from './pages/Login';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#696969" />
    {/* <Main /> */}
    <Login />
  </>
);

export default App;
