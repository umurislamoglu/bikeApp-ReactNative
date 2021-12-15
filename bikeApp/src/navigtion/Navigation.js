import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import routes from './routes'

export default function Navigation() {


    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={routes.SIGN_IN_PAGE} component={SignIn}/>
                <Stack.Screen name={routes.SIGN_UP_PAGE} component={SignUp}/>

                

            </Stack.Navigator>
        </NavigationContainer>
    )
}
