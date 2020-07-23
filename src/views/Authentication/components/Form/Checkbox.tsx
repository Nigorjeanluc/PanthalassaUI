import React from 'react';
import { Box, Text } from '../../../../components';
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';

interface CheckboxProps {
  label: String;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  return (
    <RectButton
      onPress={() => onChange()}
      style={{justifyContent: "center"}}
    >
      <Box
        flexDirection="row"
        alignItems="center"
      >
        <Box
          marginRight="m"
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked?"primary":"white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;