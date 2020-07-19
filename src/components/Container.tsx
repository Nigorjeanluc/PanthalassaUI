import React, { ReactNode } from 'react';
import { Image, Dimensions, StyleSheet, StatusBar } from "react-native";
import theme, { Box } from './Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const assets = [
  require('../../assets/patterns/imigongo.jpg'),
  require('../../assets/patterns/imigongo.png'),
  require('../../assets/patterns/imigongo1.jpg'),
];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({children, footer}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box overflow="scroll" backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl
            }}
          />
        </Box>
      </Box>
      <Box
        flex={1}
        overflow="hidden"
      >
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          flex={1}
          borderRadius="xl"
          borderTopLeftRadius={0}
          backgroundColor="white"
        >
          {children}
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;