import React from 'react';
import { View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { Theme, Box, Text } from './Theme';

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
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
      <Text
        style={{ width: iconSize, height: iconSize }}
        {...{ color }}
      >
        <Icon
          size={iconSize}
          {...{ name, color }}
        />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7
};


export default RoundedIcon;