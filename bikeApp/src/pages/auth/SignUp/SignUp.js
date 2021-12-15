import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import styles from './SignUp.styles'
import routes from '../../../navigtion/routes'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {

    const navigation = useNavigation()

    const handleSignInPress = ()  => {
        navigation.navigate(routes.SIGN_IN_PAGE);
    }


    return (
        <SafeAreaView>
            <Text style={styles.logo}>🚲</Text>
            <Input label="Email"/>
            <Input label="Password"/>
            <Button title="Sign In" onPress={handleSignInPress}/>
            <Button title="Sign Up" theme="outline" />
        </SafeAreaView>
    )
}
