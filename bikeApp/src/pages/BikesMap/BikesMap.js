import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import MapView, {Marker} from 'react-native-maps';
import styles, {PROVIDER_GOOGLE} from './BikesMap.styles';
import database from '@react-native-firebase/database';
import BikeMarker from '../../components/BikeMarker';

export default function BikesMap() {
  const [bikes, setBikes] = useState([]);
  const [selectedBike, setSelectedBike] = useState(null);

  async function listenBikeChanges() {
    database()
      .ref('/bikes')
      .on('value', snapshot => {
        const bikes = snapshot.val();

        const parsedBikeData = Object.keys(bikes).map(k => ({
          id: k,
          ...bikes[k],
        }));

        setBikes(parsedBikeData);
      });
  }

 
  useEffect(() => {
    listenBikeChanges();
  }, []);

  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.container}>
        {bikes.map((bike, keyidx) => {
          return (
           <BikeMarker key={keyidx} data={bike} onSelect={() => setSelectedBike(bike)}/>
          );
        })}
      </MapView>
      <Button
        title="Sign Out"
        theme="default"
        onPress={() => auth().signOut()}
      />
    </View>
  );
}
