import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
  },
  label: {
    fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
  }
})

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const backgroundColor = variant === "primary" ? "#2CB9B0" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "";
  return (
    <RectButton
      style={[styles.container, { backgroundColor }]}
      {...{onPress}}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = {
  variant: "default"
};

export default Button;