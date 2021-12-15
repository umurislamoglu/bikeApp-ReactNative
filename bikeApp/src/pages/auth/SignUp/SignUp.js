import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native'
import SignUpLayout from './layout/SignUpLayout'


export default function SignUp() {

    const navigation = useNavigation()

  
      function handleSignUp(signUpData) {
        try {
          auth().createUserWithEmailAndPassword(signUpData.email, signUpData.password);
          Alert.alert(
            'BIKE',
            'User created. Now you can sign in with your address',
          );
          handleReturnSignIn();
        } catch (error) {
          console.log(error);
          Alert.alert('BIKE', 'An error occurred');
        }
      }

    const  handleReturnSignIn= () => {
          if(navigation.canGoBack()){
          navigation.goBack()
              
          }
      }

    return <SignUpLayout onSignUp={handleSignUp} onGoBack={handleReturnSignIn}/>
}
