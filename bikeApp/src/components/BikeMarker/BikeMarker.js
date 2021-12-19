import React from 'react';
import {View} from 'react-native';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './BikeMarker.styles';

export default function BikeMarker({data, userData ,onSelect}) {
  const {latitude, longitude, inUse , id} = data;

  let themeColor = inUse ? 'red' : 'blue';

  
if(!!userData && userData.id === id) {
  themeColor = "green"
}

  return (
    <Marker
      coordinate={{
        latitude,
        longitude,
      }}
      onPress={onSelect}
      >
      <View style={[styles.container, {borderColor: themeColor}]}>
        <Icon name="bike" size={20} color={themeColor} />
      </View>
    </Marker>
  );
}
