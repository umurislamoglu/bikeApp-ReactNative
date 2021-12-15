import React,{useState} from 'react'
import { SafeAreaView, Text } from 'react-native'
import styles from './SignUpLayout.styles'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { Alert } from 'react-native'

export default function SignUpLayout({onSignUp , onGoBack}) {

    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        repassword: '',
      });

      function handleSignUpButton() {
        if(signUpData.password === ""  || signUpData.repassword === "" || signUpData.email === "" ) {
          Alert.alert('BIKE', 'Enter Email and Passwords areas');
          return;
        }
        if (signUpData.password !== signUpData.repassword) {
          Alert.alert('BIKE', 'Passwords are not matched');
          return;
        }
    
        onSignUp(signUpData);
      }
    

    return (
        <SafeAreaView>
            <Text style={styles.logo}>🚲</Text>
            <Input
        label="Email"
        autoCapitalize="none"
        onChangeText={email => setSignUpData({...signUpData, email})}
      />
      <Input
        label="Password"
        secureTextEntry
        onChangeText={password => setSignUpData({...signUpData, password})}
      />
      <Input
        label="Password Again"
        secureTextEntry
        onChangeText={repassword => setSignUpData({...signUpData, repassword})}
      />
            <Button title="Sign Up" onPress={handleSignUpButton}/>
            <Button title="Back" theme="outline"  onPress={onGoBack}/>
        </SafeAreaView>
    )
}
