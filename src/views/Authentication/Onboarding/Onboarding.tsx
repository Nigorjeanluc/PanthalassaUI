import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import {
  ScrollView
} from "react-native-gesture-handler";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash";
import Animated, { multiply } from 'react-native-reanimated';


import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const BORDER_RADIUS = 75;
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1,
    },
    footerContent: {
      flexDirection: "row",
      backgroundColor: "white",
      borderTopLeftRadius: BORDER_RADIUS
    }
});

const slides = [
  {title: "Relaxed", subtitle: "Welcome to Rwanda", description: "Discover the land of a thousand hills", color: "#BFEAF5"},
  {title: "Playful", subtitle: "Gorilla Trecking", description: "The unique opportunity to see mountain gorillas in their natural habitat is unforgettable.", color: "#BEECC4"},
  {title: "Excentric", subtitle: "Great Lakes", description: "Part of Africa’s Great Rift Valley, Rwanda is surrounded by magnificent lakes", color: "#FFE4D9"},
  {title: "Funky", subtitle: "Canopy Walk", description: "Memorable and photogenic moments include walking up to the Isumo waterfall or along the Canopy Walk suspension bridge.", color: "#FFDDDD"},
]

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  const x = useValue(0);
  // TODO: useScrollhandler?
  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{onScroll}}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}} />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
            },
          ]}
        >
          {slides.map(({ subtitle, description }, index) => (
            <Subslide
              key={index}
              onPress={() => {
                if(scroll.current) {
                  scroll.current
                  .getNode()
                  .scrollTo({x: width * (index + 1), animated: true})
                }
              }}
              last={index === slides.length - 1}
              {...{ subtitle, description }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default Onboarding;