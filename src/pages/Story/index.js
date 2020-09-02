import React from 'react'

import { useFonts, MedievalSharp_400Regular } from '@expo-google-fonts/medievalsharp'

import { AppLoading } from 'expo'

import { Alert } from 'react-native'

import { Background, Header, Icon, Categories, Item, Title, Button, Img } from './styles'

import ico from '../../assets/Home/icon.png'
import img from '../../assets/Menu/background.png'
import str from '../../assets/Story/faction.png'
import rc from '../../assets/Story/arthas.png'
import cls from '../../assets/Story/voljin.png'

export default function Story ({ navigation }) {
  const [fontsLoaded] = useFonts({
    MedievalSharp_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <Background source={img}>

      <Header>
        <Icon source={ico} />

      </Header>

      <Categories>

        <Item>
          <Button onPress={() => Alert.alert('Not Available!')}>
            <Img source={str} />
            <Title
              style={{ fontFamily: 'MedievalSharp_400Regular' }}
            >
              Factions
            </Title>

          </Button>

        </Item>

        <Item>
          <Button onPress={() => Alert.alert('Not Available!')}>
            <Img source={cls} />
            <Title
              style={{ fontFamily: 'MedievalSharp_400Regular' }}
            >
              Characters
            </Title>

          </Button>

        </Item>

        <Item>
          <Button onPress={() => Alert.alert('Not Available!')}>
            <Img source={rc} />
            <Title
              style={{ fontFamily: 'MedievalSharp_400Regular' }}
            >
              Expansions
            </Title>

          </Button>

        </Item>

      </Categories>

    </Background>

  )
}
