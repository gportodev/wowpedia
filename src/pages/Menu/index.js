import React from 'react'

import { useFonts, MedievalSharp_400Regular } from '@expo-google-fonts/medievalsharp'

import { AppLoading } from 'expo'

import { Background, Categories, Title, Button, Img } from './styles'

import img from '../../assets/Menu/background.png'
import str from '../../assets/Menu/story.png'
import rc from '../../assets/Menu/races.png'
import cls from '../../assets/Menu/class.png'

export default function Menu ({ navigation }) {
  const [fontsLoaded] = useFonts({
    MedievalSharp_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <Background source={img}>

      <Categories>
        <Button onPress={() => navigation.navigate('Story')}>
          <Title style={{ fontFamily: 'MedievalSharp_400Regular' }}>Story</Title>
          <Img source={str} />
        </Button>

        <Button>
          <Title style={{ fontFamily: 'MedievalSharp_400Regular' }}>Races</Title>
          <Img source={rc} />
        </Button>

        <Button>
          <Title style={{ fontFamily: 'MedievalSharp_400Regular' }}>Classes</Title>
          <Img source={cls} />
        </Button>
      </Categories>

    </Background>

  )
}
