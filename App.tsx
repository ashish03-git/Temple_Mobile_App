import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Welcome from './Screens/Welcome'
import Login from './Screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Registration from './Screens/registration'

const Stack = createStackNavigator()
const App = () => {
  return (
    <>
      <NavigationContainer >
        <StatusBar hidden />
        <Stack.Navigator initialRouteName='welcome'>
          <Stack.Screen name='welcome' options={{headerShown:false}} component={Welcome} />
          <Stack.Screen name='login'options={{headerShown:false}} component={Login} />
          <Stack.Screen name='register'options={{headerShown:false}} component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App