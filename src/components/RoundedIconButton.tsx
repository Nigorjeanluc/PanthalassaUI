import React from 'react';
import {Feather as Icon} from "@expo/vector-icons";
import { Box, Text } from './Theme';
import { RectButton } from 'react-native-gesture-handler';
import RoundedIcon, { RoundedIconProps } from './RoundedIcon';

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress : () => void;
}

const SIZE = 60;

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </RectButton>
  );
}

export default RoundedIconButton;
