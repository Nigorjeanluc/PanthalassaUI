import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from "react-native";

import { useScrollHandler, interpolateColor } from "react-native-redash";
import Animated, { multiply, divide, interpolate, Extrapolate } from 'react-native-reanimated';


import Slide, { SLIDE_HEIGHT/*, BORDER_RADIUS*/ } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import { useTheme } from '../../../components';
import {
  AuthNavigationProps
} from '../../../components/Navigation';
import { Theme, makeStyles } from '../../../components/Theme';

const {width, height} = Dimensions.get('window');

const useStyles = makeStyles((theme: Theme) => ({
  container: {
        flex: 1,
        backgroundColor: "white"
  },
    
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
    // borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden"
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    // borderBottomRightRadius: BORDER_RADIUS
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
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const slides = [
  {
    title: "Clean",
    subtitle: "Welcome to Rwanda",
    description: "Discover the land of a thousand hills",
    color: "#BFEAF5",
    picture: {
      src: require("../../../../assets/onboarding/1.jpg"),
      width: 3513,
      height: 3583,
    }
  },
  {
    title: "Green",
    subtitle: "Gorilla Trecking",
    description: "A unique opportunity to see mountain gorillas in their natural habitat",
    color: "#BEECC4",
    picture: {
      src: require("../../../../assets/onboarding/2.jpg"),
      width: 3513,
      height: 3583,
  }
  },
  {
    title: "Responsible",
    subtitle: "Great Lakes",
    description: "Part of Africa’s Great Rift Valley, Rwanda is surrounded by magnificent lakes", color: "#FFE4D9",
    picture: {
      src: require("../../../../assets/onboarding/3.jpeg"),
      width: 3513,
      height: 3583,
    }
  },
  {
    title: "Tourism",
    subtitle: "Canopy Walkway",
    description: "Memorable and photogenic moments along the Canopy Walk suspension bridge.",
    color: "#FFDDDD",
    picture: {
      src: require("../../../../assets/onboarding/4.jpg"),
      width: 3513,
      height: 3583,
    }
  },
];

export const assets = slides.map(slide => slide.picture.src);

const Onboarding = ({ navigation }:AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
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
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [(index - 0.5) * width, index * width, (index + 0.5) * width],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View key={index} style={[styles.underlay, { opacity }]}>
              <Image
                source={picture.src}
                style={styles.picture}
                // style={{
                //   width: width - theme.borderRadii.xl,
                //   height:
                //     ((width - theme.borderRadii.xl) * picture.height) / picture.width
                // }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title, picture }, index) => {
            return (
              <Slide key={index} right={!(!(index % 2))} {...{ title, picture }} />
            );
          })}
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
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1
              return (
                <Subslide
                  key={index}
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                      ?.getNode()
                      .scrollTo({x: width * (index + 1), animated: true})
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;