import React from 'react';
import { Box, Text, useTheme } from '../../components/Theme';
import { Image, StyleSheet } from 'react-native';
import { Button } from '../../components';
import {
  AuthNavigationProps
} from '../../components/Navigation';
import { BorderlessButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    // borderBottomRightRadius: theme.borderRadii.xl
  },
})

const picture = {
  src: require('../../../assets/onboarding/6.png'),
  width: 3383,
  height: 5074,
}

export const assets = [picture.src];

const Welcome = ({
  navigation 
}: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        // borderBottomRightRadius="xl"
        backgroundColor="primary"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={styles.picture}
        />
      </Box>
      <Box
        flex={1}
        // borderTopLeftRadius="xl"
      >
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          flex={1}
          backgroundColor="white"
          // borderTopLeftRadius="xl"
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">
            Let's get started
          </Text>
          <Text
            variant="body"
            textAlign="center"
          >
            Login to your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Join us, it's Free"
            onPress={() => navigation.navigate("SignUp")}
          />
          <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
            <Text variant="button" color="secondary">Forgot password?</Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Welcome;