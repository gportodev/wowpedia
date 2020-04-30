import React from 'react';
import { View, Image, Text, Button } from 'react-native';

import logo1 from '../../assets/logo1.jpg';
import logo2 from '../../assets/logo2.jpg';

function Main({ navigation }) {
  return (
    <>
      <View
        style={{
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
      >
        <Image
          source={logo1}
          style={{
            resizeMode: 'contain',
            width: 400,
            height: 400,
            marginTop: -100,
          }}
        />
        <Image
          source={logo2}
          style={{
            resizeMode: 'contain',
            width: 300,
            height: 200,
            marginTop: -100,
          }}
        />
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ color: '#FDB32A', fontSize: 28 }}>
            Greetings Friend!
          </Text>
          <Text style={{ color: '#FDB32A', fontSize: 28 }}>Welcome...</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button title="Login" color="#1749CA" />
        </View>

        <View>
          <Button title="Create Account" color="#1749CA" />
        </View>

        <Text style={{ color: '#FFFFFF' }}>Don't have an account? Sign Up</Text>
      </View>
    </>
  );
}

export default Main;
