import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={({navigation})=>({
          title:'App',
          headerTitleStyle:{ fontWeight: 'bold'}
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;