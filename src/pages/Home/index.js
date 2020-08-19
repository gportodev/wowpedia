import React from 'react'

import img from '../../assets/Home/background.png'
import ico from '../../assets/Home/icon.png'

import { Background, Button, Icon } from './styles'

export default function Home ({ navigation }) {
  return (
    <Background source={img}>
      <Button onPress={() => navigation.navigate('Menu')}>

        <Icon source={ico} />

      </Button>
    </Background>

  )
}
