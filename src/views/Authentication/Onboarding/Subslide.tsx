import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button, Text } from '../../../components';

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
    textAlign: "center"
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 16,
    lineHeight: 25,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40
  }
});

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2">{subtitle}</Text>
      <Text variant="body">{description}</Text>
      <Button
        label={last? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;