import React, {useMemo} from 'react';
import {parseISO, formatDistance} from 'date-fns';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Left, Avatar, Info, Name, Time} from './styles.js';
import {APP_URL} from '~/services/api';

export default function Appointment({data, onCancel}) {
  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(data.date), new Date(), {
      addSuffix: true,
    });
  }, [data.date]);

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? `${APP_URL}/files/${data.provider.avatar.path}`
              : `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
          }}
        />

        <Info>
          <Name>{data.provider.name}</Name>

          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}
