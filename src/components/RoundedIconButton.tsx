import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import RoundedIcon, { RoundedIconProps } from './RoundedIcon';

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress : () => void;
}

const SIZE = 60;

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size
      }}
      {...{ onPress }}
    >
      <RoundedIcon {...props} />
    </RectButton>
  );
}

RoundedIconButton.defaultProps = {
  iconRatio: 0.7
};

export default RoundedIconButton;
