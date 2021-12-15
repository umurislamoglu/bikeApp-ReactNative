import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import styles from './SignIn.styles'
import routes from '../../../navigtion/routes'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {

    const navigation = useNavigation()

    const handleSignUpPress = ()  => {
        navigation.navigate(routes.SIGN_UP_PAGE);
    }


    return (
        <SafeAreaView>
            <Text style={styles.logo}>🚲</Text>
            <Input label="Email"/>
            <Input label="Password"/>
            <Button title="Sign In"/>
            <Button title="Sign Up" theme="outline" onPress={handleSignUpPress}/>
        </SafeAreaView>
    )
}
