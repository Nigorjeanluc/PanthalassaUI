import React from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';

import {Text, theme} from "../../../components";

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

// export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 50,
    lineHeight: 80,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center"
  }
})

interface SlideProps {
  title: String;
  right?: Boolean;
};

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 -50 : -width / 2 + 50},
    {rotate: right? "-90deg" : "90deg" }
  ];

  return (
  <View style={{width}}>
    <View style={[styles.titleContainer, { transform }]}>
      <Text
        variant="hero"
        // style={styles.title}
      >
        {title}
      </Text>
    </View>
  </View>
  );
};

export default Slide;