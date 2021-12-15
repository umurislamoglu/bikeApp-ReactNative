import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import routes from './routes';
import auth from '@react-native-firebase/auth';
import BikesMap from '../pages/BikesMap/';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [hasSession, setHasSession] = useState(null);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(setHasSession);
    return subscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!!hasSession ? (
          <Stack.Screen name={routes.BIKES_MAPS_PAGE} component={BikesMap} />
        ) : (
          <>
            <Stack.Screen name={routes.SIGN_IN_PAGE} component={SignIn} />
            <Stack.Screen name={routes.SIGN_UP_PAGE} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
