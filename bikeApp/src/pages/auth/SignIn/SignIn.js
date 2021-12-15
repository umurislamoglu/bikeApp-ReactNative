import React,{useState} from 'react'
import { Text, SafeAreaView } from 'react-native'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import styles from './SignIn.styles'
import routes from '../../../navigtion/routes'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native'
import SignInLayout from './layout/SignInLayout'

export default function SignIn() {

    const navigation = useNavigation()


    const handleSignUpPress = ()  => {
        navigation.navigate(routes.SIGN_UP_PAGE);
    }

    function handleSignIn(signInData) {
        if(!!signInData.email && !!signInData.password){
            try {
                auth().signInWithEmailAndPassword(signInData.email, signInData.password);
                Alert.alert('BIKE', 'Signed In');
              } catch (error) {
                console.log(error);
                Alert.alert('BIKE', 'An error occurred');
              }
        }
     
      }
    


    return <SignInLayout onSignUpPress={handleSignUpPress} onSignIn={handleSignIn} />
    
}
