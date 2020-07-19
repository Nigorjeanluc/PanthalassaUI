import React from 'react';
import { View } from 'react-native';

import { Container, Button, Text } from '../../../components';

import SocialLogin from "../components/SocialLogin";
import { Box } from '../../../components/Theme';

interface LoginProps {}

const Login = () => {
  const footer = (
    <>
      <SocialLogin/>
      <Box alignItems="center">
        <Button
          variant="transparent"
          onPress={() => alert("SignUp")}
        >
          <Box flex={1} flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">Don't have an account?</Text>
            <Text marginLeft="s" variant="button" color="primary">Sign Up here</Text>
          </Box>
        </Button>
      </Box>
    </>
  )
  return (
    <Container {...{footer}}>
      <View></View>
    </Container>
  );
}

export default Login;