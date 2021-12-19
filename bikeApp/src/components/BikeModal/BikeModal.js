import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';

import Button from '../Button';
import styles from './BikeModal.styles';

export default function BikeModal({
  bike,
  onCloseRequest,
  onRentBike,
  onGiveAway,
}) {
  return (
    <Modal
      isVisible={!!bike}
      swipeDirection="down"
      style={styles.modal}
      onBackdropPress={onCloseRequest}
      onBackButtonPress={onCloseRequest}
      onSwipeComplete={onCloseRequest}>
      {!!bike && (
        <View style={styles.container}>
          <Text style={styles.name}>{bike.name}</Text>
          {!bike.inUse ? (
            <>
              <Text style={styles.rent}>Available to rent</Text>
              <Button title="Rent" onPress={onRentBike} />
            </>
          ):(
              <Button title="Release" theme="outline" onPress={onGiveAway} />
          )}
        </View>
      )}
      <SafeAreaView style={styles.bottom_safe} />
    </Modal>
  );
}
