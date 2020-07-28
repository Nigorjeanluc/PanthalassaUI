import React, { useRef } from 'react';

import { TextInput as RNTextInput } from 'react-native';

import { Container, Button, Text, Box } from '../../components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextInput from './components/Form/TextInput';
import Checkbox from './components/Form/Checkbox';
import Footer from './components/Footer';
import { StackNavigationProps, Routes } from '../../components/Navigation';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const footer = (
    <Footer
      title="Dont't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '', remember: true },
    onSubmit: (values) => console.log(values)
  });

  const password = useRef<RNTextInput>(null);

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
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  autoCapitalize="none"
                  autoCompleteType="email"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onSubmitEditing={() => password.current?.focus()}
                />
              </Box>
              <Box>
                <TextInput
                  ref={password}
                  icon="lock"
                  placeholder="Enter your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onSubmitEditing={() => handleSubmit()}
                  secureTextEntry
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
                <Button variant="transparent" onPress={() => navigation.navigate("ForgotPassword")}>
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
      </Box>
    </Container>
  );
}

export default Login;