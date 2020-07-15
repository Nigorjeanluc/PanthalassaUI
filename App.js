import 'react-native-gesture-handler';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import Tutorial from './src/views/Tutorial';
// import Profile from './src/views/Profile';
import { Onboarding } from './src/views/Authentication';
import { LoadAssets } from './src/components';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen
          name="Onboarding"
          component={Onboarding}
        />
    </AuthenticationStack.Navigator>
  );
}

const App = () => {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}

export default App;