import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Story from './pages/Story'

const { Navigator, Screen } = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>

        <Screen name='Home' component={Home} />
        <Screen name='Menu' component={Menu} />
        <Screen name='Story' component={Story} />

      </Navigator>
    </NavigationContainer>
  )
}
