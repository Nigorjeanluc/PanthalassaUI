import React, { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps
} from "react-native";
import { Box, useTheme, RoundedIcon } from '..';
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}


const TextInput = forwardRef<RNTextInput, TextInputProps>((
  { icon, touched, error, ...props },
  ref
) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.m * 2.5;
  const reColor = !touched ? "text" : error ? "danger" : "primary";
  const color = theme.colors[reColor];
  
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={50}
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }}/>
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...{ref}}
          {...props}
        />
      </Box>
      { touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
            color="white"
          />
        )
      }
    </Box>
  );
});

export default TextInput;
