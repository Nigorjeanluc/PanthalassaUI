import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps
} from "react-native";
import { Box, theme } from '../../../../components';
import { Feather as Icon } from "@expo/vector-icons";

interface TextInputProps extends RNTextInputProps {
  // placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);
  const reColor: keyof typeof theme.colors = state === Pristine ? "text" : (state === Valid) ? "primary" : "danger";
  const color = theme.colors[reColor];
  const onChangeText= text => {
    if (state !== Pristine) {
      validate();
    }
    setInput(text);
  };
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  }
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
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={color}
        onBlur={validate}
        {...{onChangeText}}
        {...props}
      />
      {
        (state === Valid || state === Invalid) && (
          <Box height={SIZE} width={SIZE} borderRadius="m" backgroundColor={state === Valid ? "primary" : "danger"}>
            <Icon name={state === Valid ? "check" : "x"} color="white" size={16} />
          </Box>
        )
      }
    </Box>
  );
};

export default TextInput;
