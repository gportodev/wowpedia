import React from 'react'

import { useFonts, MedievalSharp_400Regular } from '@expo-google-fonts/medievalsharp'

import { AppLoading } from 'expo'

import { Background, Categories, Title, Button, Story } from './styles'

import img from '../../assets/menu/background.png'
import str from '../../assets/menu/story.png'
import rc from '../../assets/menu/races.png'
import cls from '../../assets/menu/class.png'

export default function Menu () {
  const [fontsLoaded] = useFonts({
    MedievalSharp_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <Background source={img}>

      <Categories>
        <Button>
          <Title style={{ fontFamily: 'MedievalSharp_400Regular' }}>Story</Title>
          <Story source={str} />
        </Button>

        <Button>
          <Title style={{ fontFamily: 'MedievalSharp_400Regular' }}>Races</Title>
          <Story source={rc} />
        </Button>

        <Button>
          <Title style={{ fontFamily: 'MedievalSharp_400Regular' }}>Classes</Title>
          <Story source={cls} />
        </Button>
      </Categories>

    </Background>

  )
}
