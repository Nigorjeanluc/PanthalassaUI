import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import {
  ScrollView
} from "react-native-gesture-handler";
import { useScrollHandler, interpolateColor } from "react-native-redash";
import Animated, { multiply, divide } from 'react-native-reanimated';


import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        // borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1,
    },
    footerContent: {
      flex: 1,
      backgroundColor: "white",
      // borderTopLeftRadius: BORDER_RADIUS
    },
    pagination: {
      ...StyleSheet.absoluteFillObject,
      height: BORDER_RADIUS,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
});

const slides = [
  {title: "Clean", subtitle: "Welcome to Rwanda", description: "Discover the land of a thousand hills", color: "#BFEAF5", picture: require("../../../../assets/onboarding/1.jpg")},
  {title: "Green", subtitle: "Gorilla Trecking", description: "A unique opportunity to see mountain gorillas in their natural habitat", color: "#BEECC4", picture: require("../../../../assets/onboarding/2.jpg")},
  {title: "Responsible", subtitle: "Great Lakes", description: "Part of Africa’s Great Rift Valley, Rwanda is surrounded by magnificent lakes", color: "#FFE4D9", picture: require("../../../../assets/onboarding/3.jpeg")},
  {title: "Tourism", subtitle: "Canopy Walkway", description: "Memorable and photogenic moments along the Canopy Walk suspension bridge.", color: "#FFDDDD", picture: require("../../../../assets/onboarding/4.jpg")},
]

const Onboarding = () => {
  const scroll = useRef<Animated.ScrollView>(null);
  // TODO: useScrollHandler?
  const { scrollHandler, x } = useScrollHandler();

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
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!(!(index % 2))} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor}} />
        <View style={ styles.footerContent }>
          <View style={styles.pagination}>
            {slides.map((_,index) => (
              <Dot
                key={index}
                currentIndex={divide(x, width)}
                {...{index}}
              />
            ))}
          </View>
          <Animated.View style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
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
    </View>
  );
};

export default Onboarding;