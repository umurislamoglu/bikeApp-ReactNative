import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import MapView from 'react-native-maps';
import styles, {PROVIDER_GOOGLE} from './BikesMap.styles';
import database from '@react-native-firebase/database';
import BikeMarker from '../../components/BikeMarker';
import {mapStyle} from './values';
import BikeModal from '../../components/BikeModal/BikeModal';
import { Alert } from 'react-native';

export default function BikesMap() {
  const [bikes, setBikes] = useState([]);
  const [selectedBike, setSelectedBike] = useState(null);
  const [userBike, setUserBike] = useState(null);

  async function listenBikeChanges() {
    database()
      .ref('/bikes')
      .on('value', snapshot => {
        const bikeData = snapshot.val();

        const parsedBikeData = Object.keys(bikeData).map(k => ({
          id: k,
          ...bikeData[k],
        }));

        setBikes(parsedBikeData);
      });
  }

  async function handleRentBike() {

    if(!!userBike){
      Alert.alert("Bike App","You can't rent more than one bike")
      return
    }

    try { 
      const {id, ...bikeData} = selectedBike;

      await database()
        .ref('/bikes/' + selectedBike.id)
        .update({
          ...bikeData,
          inUse: 1,
          uid: auth().currentUser.uid 
        });

      await database()
        .ref('/user/' + auth().currentUser.uid + '/currentSelectedBike')
        .set(selectedBike);

      setUserBike({
        inUse:1,
        ...selectedBike,
        uid: auth().currentUser.uid })

      setSelectedBike(null);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRelease(){
    const {id, ...bikeData} = selectedBike;

    await database()
    .ref('/bikes/' + selectedBike.id)
    .update({
      ...bikeData,
      inUse: 0,
    });
    await database()
    .ref('/user/' + auth().currentUser.uid + '/currentSelectedBike')
    .set(null);


    setUserBike(null)
  setSelectedBike(null);
  };

  useEffect(() => {
    listenBikeChanges();
  }, []);

  return (
    <View style={styles.container}>
       <Button
        title="Sign Out"
        theme="default"
        onPress={() => auth().signOut()}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.container}>
        {bikes.map((bike, keyidx) => {
          return (
            <BikeMarker
              key={keyidx}
              data={bike}
              userData={userBike}
              onSelect={() => setSelectedBike(bike)}
            />
          );
        })}
      </MapView>
      <BikeModal
        bike={selectedBike}
        onCloseRequest={() => setSelectedBike(null)}
        onRentBike={handleRentBike}
        onGiveAway={handleRelease}
      />
     
    </View>
  );
}
