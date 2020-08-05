import {
  createText,
  createBox,
  useTheme as useReTheme
} from "@shopify/restyle";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

export const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    black: "#000000",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "rgba(12, 13, 52, 0.05)",
    lightGrey: "#FAFAFA",
    transparent: "rgba(0, 0, 0, 0.00)",
    darkGrey: "#8A8D90",
    danger: "#FF0058",
    primaryLight: "#E7F9F7",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5"
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 100,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 60,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
      textShadow: "0 0 1 black"
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "secondary"
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      textAlign: "center",
      color: "secondary"
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
      justifyContent: "center",
      textAlign: "center",
      marginBottom: "s"
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProText-Medium",
      color: "text",
      textAlign: "center"
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProText-Semibold",
      color: "secondary"
    }
  },
  breakpoints: {}
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};

// export default theme;