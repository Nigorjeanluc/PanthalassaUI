import React from 'react';
import { StyleSheet, Dimensions, ImageRequireSource } from 'react-native';
import { Box, Text } from '../../../components';
import Animated, { add, interpolate, Extrapolate } from 'react-native-reanimated';
import { mixColor, mix, usePanGestureHandler } from 'react-native-redash';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { useSpring } from "./Animations";


const {width: wWidth} = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;
interface CardProps {
  position: Animated.Node<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
  title: string;
  subtitle: string;
}

const Card = ({ position, onSwipe, source, step, title, subtitle }: CardProps) => {
  const { gestureHandler, translation, velocity, state } = usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1 , 0.9);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
        value: translation.y,
        velocity: velocity.y,
        state,
        snapPoints: [0]
      })
    );
  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scale }],
            overflow: "hidden",
            justifyContent: "flex-end"
          }}
        >
          <Animated.Image {...{source}} style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            transform: [{ scale: imageScale }],
            borderRadius: 22
          }}/>
          <Box
            margin="l"
            justifyContent="center"
            alignItems="center"
            backgroundColor="partialTransparent"
            borderRadius="m"
            padding="m"
          >
            <Text variant="title3">{title}</Text>
            <Text variant="title4">{subtitle}</Text>
          </Box>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
