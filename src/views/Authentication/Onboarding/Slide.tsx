import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 70,
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
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  </View>
  );
};

export default Slide;