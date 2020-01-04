import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Left, Avatar, Info, Name, Time} from './styles.js';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{uri: 'https://api.adorable.io/avatar/50/profile.png'}}
        />

        <Info>
          <Name>Diego Chagas</Name>

          <Time>at 3 hours</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
