import React from 'react';
import { Box, RoundedIconButton, Text } from '.';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({left, title, right, dark}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "black";
  const backgroundColor = dark ? "secondary" : "lightGrey";
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        size={44}
        iconRatio={0.5}
        name={left.icon}
        onPress={left.onPress}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" {...{ color }}>{title.toUpperCase()}</Text>
      <RoundedIconButton
        size={44}
        iconRatio={0.5}
        name={right.icon}
        onPress={right.onPress}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
