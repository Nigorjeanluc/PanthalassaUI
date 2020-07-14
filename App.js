import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tutorial from './src/views/Tutorial';
import Profile from './src/views/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
          options={{title: 'You must learn more'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;