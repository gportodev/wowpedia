import React from 'react'

import img from '../../assets/home/background.png'
import ico from '../../assets/home/icon.png'

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
