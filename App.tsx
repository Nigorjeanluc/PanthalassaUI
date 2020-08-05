import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavigator, assets as homeAssets } from './src/views/Home';
import {
  assets as authenticationAssets,
  AuthenticationNavigator
} from './src/views/Authentication';
import { LoadAssets } from './src/components';
import { theme } from './src/components/Theme';
import { AppRoutes } from './src/components/Navigation';

const assets = [...authenticationAssets, ...homeAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen
              name="Home"
              component={HomeNavigator}
            />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}

export default App;