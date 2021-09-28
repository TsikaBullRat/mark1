import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Signup, Login } from './src/Login Tester';
import { auth } from './src/firebase/config';

const Stack = createStackNavigator()
//Login tester
export default function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user))
  }, [])
console.log(user)
  return (
    <NavigationContainer>
      {user ? (
        <Home />
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
    </NavigationContainer >
  );
};