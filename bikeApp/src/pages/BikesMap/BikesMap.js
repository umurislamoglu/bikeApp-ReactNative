import React from 'react'
import { View, Text } from 'react-native'
import Button from '../../components/Button'
import auth  from '@react-native-firebase/auth';

export default function BikesMap() {
    return (
        <View>
            <Text>Bikes map</Text>
            <Button title="Sign Out" theme="default" onPress={()=>auth().signOut()}/>
        </View>
    )
}
