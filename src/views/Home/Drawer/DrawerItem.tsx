import React from 'react';
import { Theme, Box, Text, useTheme } from '../../../components/Theme';
import { RectButton } from 'react-native-gesture-handler';
import { RoundedIcon } from '../../../components';
import { HomeRoutes } from '../../../components/Navigation';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: keyof HomeRoutes;
  label: string;
}

const DrawerItem = ({icon, color, screen, label}: DrawerItemProps) => {
  const theme = useTheme();
  const { navigate } = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();
  return (
    <RectButton
      onPress={() => navigate(screen)}
      style={{
        borderRadius: theme.borderRadii.m
      }}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        padding="s"
      >
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color={"white"}
        />
        <Text
          variant="button"
          color="secondary"
          marginLeft="m"
        >
          {label}
        </Text>
      </Box>
    </RectButton>
    
  );
}

export default DrawerItem;
