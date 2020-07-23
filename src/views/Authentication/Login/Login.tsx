import React from 'react';

import { Container, Button, Text, Box } from '../../../components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SocialLogin from "../components/SocialLogin";
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/Checkbox';

interface LoginProps {}

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email("Invalid email").required("Required"),
});

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
      <Box marginBottom="m" padding="xl">
        <Text
          variant="title1"
          textAlign="center"
          marginBottom="l"
        >
          Welcome back
        </Text>
        <Text
          variant="body"
          textAlign="center"
          marginBottom="l"
        >
          Use your credentials below and login to your account
        </Text>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: '', password: '', remember: true }}
          onSubmit={(values) => console.log(values)}
        >
          {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue
            }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <Box>
                <TextInput
                  icon="lock"
                  placeholder="Enter your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
              >
                <Checkbox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button variant="transparent" onPress={() => true}>
                  <Text marginLeft="xl" color="primary">Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Log into your account"
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default Login;