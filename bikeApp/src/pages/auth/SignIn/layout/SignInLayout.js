import React , {useState} from 'react'
import { SafeAreaView, Text } from 'react-native'
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import styles from './SignInLayout.styles'

export default function SignInLayout({onSignUpPress , onSignIn}) {

    const [signInData, setSignInData] = useState({email:"", password:""});

const handleSignIn = () => {
    if(signInData.email==="" || signInData.password===""){
        return;
    }
    onSignIn(signInData)
}

    return (
        <SafeAreaView>
        <Text style={styles.logo}>🚲</Text>
        <Input label="Email" autoCapitalize="none" onChangeText={email=>setSignInData({ ...signInData , email})}/>
        <Input label="Password" secureTextEntry onChangeText={password=>setSignInData({ ...signInData , password})}/>
        <Button title="Sign In" onPress={handleSignIn}/>
        <Button title="Sign Up" theme="outline" onPress={onSignUpPress}/>
    </SafeAreaView>
    )
}
