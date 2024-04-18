import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen.js'
import JSON from './screens/JSON.js'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='iHome' component={HomeScreen}/>
        <Stack.Screen name='Ver Json' component={JSON}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App