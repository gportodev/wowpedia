import React, { useState } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import {
  Container,
  List,
  Logo2,
  Logo3,
  ListRace,
  Race,
  CreateAccountView,
  CarrouselView,
} from './styles';

import horde from '../../assets/logos/horde.jpg';
import ally from '../../assets/logos/ally.jpg';

import nightElf from '../../assets/races/ally/night_elf.png';
import human from '../../assets/races/ally/human.png';
import gnome from '../../assets/races/ally/gnome.png';
import worgen from '../../assets/races/ally/worgen.png';
import pandaren_ally from '../../assets/races/ally/pandaren.png';
import dwarf from '../../assets/races/ally/dwarf.png';
import draenei from '../../assets/races/ally/draenei.png';

import orc from '../../assets/races/horde/orc.png';
import undead from '../../assets/races/horde/undead.png';
import tauren from '../../assets/races/horde/tauren.png';
import troll from '../../assets/races/horde/troll.png';
import blood_elf from '../../assets/races/horde/blood_elf.png';
import goblin from '../../assets/races/horde/goblin.png';
import pandaren_horde from '../../assets/races/horde/pandaren.png';

export default function ChooseYourSide() {
  const [state, setState] = useState({
    activeIndex: 0,
    choices: null,
    horde: [
      {
        title: 'Orc',
        avatar: orc,
        text: 'Orc',
      },
      {
        title: 'Undead',
        avatar: undead,
        text: 'Undead',
      },
      {
        title: 'Tauren',
        avatar: tauren,
        text: 'Tauren',
      },

      {
        title: 'Troll',
        avatar: troll,
        text: 'Troll',
      },
      {
        title: 'Blood Elf',
        avatar: blood_elf,
        text: 'Blood Elf',
      },
      {
        title: 'Goblin',
        avatar: goblin,
        text: 'Goblin',
      },
      {
        title: 'Pandaren',
        avatar: pandaren_horde,
        text: 'Pandaren',
      },
    ],
    alliance: [
      {
        title: 'Human',
        avatar: human,
        text: 'Human',
      },
      {
        title: 'Dwarf',
        avatar: dwarf,
        text: 'Dwarf',
      },
      {
        title: 'NightElf',
        avatar: nightElf,
        text: 'NightElf',
      },
      {
        title: 'Gnome',
        avatar: gnome,
        text: 'Gnome',
      },
      {
        title: 'Draenei',
        avatar: draenei,
        text: 'Draenei',
      },
      {
        title: 'Worgen',
        avatar: worgen,
        text: 'Worgen',
      },
      {
        title: 'Pandaren',
        avatar: pandaren_ally,
        text: 'Pandaren',
      },
    ],
  });

  const [modalVisible, setModalVisible] = useState(false);

  function _renderItem({ item }) {
    return (
      <ListRace>
        <Race source={item.avatar} />
      </ListRace>
    );
  }

  return (
    <Container>
      <List>
        <TouchableOpacity
          onPress={() => setState({ ...state, choices: 'Horde' })}
        >
          <Logo2 source={horde} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setState({ ...state, choices: 'Alliance' })}
        >
          <Logo3 source={ally} />
        </TouchableOpacity>
      </List>
      {state.choices === 'Horde' ? (
        <CarrouselView>
          <Carousel
            data={state.horde}
            renderItem={_renderItem}
            sliderWidth={400}
            itemWidth={300}
            onSnapToItem={(index) => setState({ ...state, activeIndex: index })}
          />
          <Pagination
            dotsLength={state.alliance.length}
            activeDotIndex={state.activeIndex}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 8,
              backgroundColor: '#c91010',
            }}
            inactiveDotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />

          <CreateAccountView>
            <Button title="Create Account" color="#c91010" />
          </CreateAccountView>
        </CarrouselView>
      ) : (
        <CarrouselView>
          <Carousel
            data={state.alliance}
            renderItem={_renderItem}
            sliderWidth={400}
            itemWidth={300}
            onSnapToItem={(index) => setState({ ...state, activeIndex: index })}
          />

          <Pagination
            dotsLength={state.alliance.length}
            activeDotIndex={state.activeIndex}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 8,
              backgroundColor: '#1749CA',
            }}
            inactiveDotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />

          <CreateAccountView>
            <Button title="Create Account" color="#1749CA" />
          </CreateAccountView>
        </CarrouselView>
      )}
    </Container>
  );
}
