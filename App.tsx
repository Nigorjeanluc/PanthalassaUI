import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  assets as authenticationAssets,
  AuthenticationNavigator
} from './src/views/Authentication';
import { LoadAssets } from './src/components';
import { theme } from './src/components/Theme';

const assets = [...authenticationAssets];
const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SFProText-Medium": require("./assets/fonts/SF-Pro-Text-Medium.ttf"),
};


const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}

export default App;