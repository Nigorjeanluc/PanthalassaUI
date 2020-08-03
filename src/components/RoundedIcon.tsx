import React from 'react';
import { View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Theme, Box, Text } from './Theme';

interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor
}: RoundedIconProps) => {
  const iconSize = size * 0.7;
  return (
    <Box
      height={size}
      width={size}
      borderRadius="m"
      justifyContent="center"
      alignItems="center"
      marginRight="s"
      style={{ borderRadius: size/2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon
          color="white"
          size={iconSize}
          style={{ textAlign: "center"}}
          {...{ name }}
        />
      </Text>
    </Box>
  );
}

export default RoundedIcon;