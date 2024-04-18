import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen.js'
import DatosScreen from './screens/DatosScreen.js'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='iHome' component={HomeScreen}/>
        <Stack.Screen name='Datos' component={DatosScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App