import React from 'react';
import  { Linking } from 'react-native';
import { StackNavigationProps, Routes } from '../../components/Navigation';
import Footer from './components/Footer';
import { Container, Box, Text, Button } from '../../components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from './components/Form/TextInput';
import Checkbox from './components/Form/Checkbox';

interface ForgotPasswordProps {}

const ForgotPassword = ({ navigation }: StackNavigationProps<Routes, "ForgotPassword">) => {
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: { email: '' },
    onSubmit: () => navigation.navigate("PasswordChanged")
  });
  
  const footer = (
    <Footer
      title="Dont't work?"
      action="Try another way"
      onPress={() => {
        console.log("GO"), navigation.navigate("PasswordChanged");
      }}
    />
  );
  return (
  <Container {...{footer}}>
    <Box justifyContent="center" padding="xl">
        <Text
          variant="title1"
          textAlign="center"
          marginBottom="l"
        >
          Forgot Password?
        </Text>
        <Text
          variant="body"
          textAlign="center"
          marginBottom="l"
        >
          Enter the email address associated with your account
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
                  onSubmitEditing={() => handleSubmit()}
                />
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Reset Password"
                />
              </Box>
            </Box>
      </Box>
  </Container>);
};

export default ForgotPassword;