import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import DatosScreen from './screens/DatosScreen.js';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="home" size={24} color="white" style={{ marginRight: 5 }} />
                <Text {...props} style={{ color: 'white', fontSize: 20 }}>Home</Text>
              </View>
            ),
            headerStyle: { backgroundColor: '#007bff' },
          }}
        />
        <Stack.Screen
          name='Datos'
          component={DatosScreen}
          options={{
            headerTitle: (props) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome name="file" size={24} color="white" style={{ marginRight: 5 }} />
                <Text {...props} style={{ color: 'white', fontSize: 20 }}>Datos</Text>
              </View>
            ),
            headerStyle: { backgroundColor: '#007bff' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
