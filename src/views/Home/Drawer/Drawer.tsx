import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Box, Text, Header } from '../../../components';
import { Dimensions, Image } from 'react-native';
import { theme } from '../../../components/Theme';
import DrawerItem, {DrawerItemProps} from './DrawerItem';
import { HomeNavigationProps } from '../../../components/Navigation';

export const assets = [require('../../../../assets/patterns/imigongo.jpg')];

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 350 / 1125;
const height = width * aspectRatio;
const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Activities",
    screen: "OutfitIdeas",
    color: "primary"
  },
  {
    icon: "heart",
    label: "Favorites Places",
    screen: "FavoriteOutfits",
    color: "orange"
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "FavoriteOutfits",
    color: "yellow"
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink"
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "FavoriteOutfits",
    color: "violet"
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "FavoriteOutfits",
    color: "secondary"
  }
]

const Drawer = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <Box flex={1}>
      <Box
        flex={0.2}
        backgroundColor="white"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="Menu"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer())
            }}
            right={{
              icon: "shopping-bag",
              onPress: () => true
            }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primaryLight" />
        <Image
            source={assets[0]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -height * 0.61,
              width: DRAWER_WIDTH,
              height: height,
            }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              M. Vincent
            </Text>
            <Text variant="body" textAlign="center">
              mvincent@gmail.com
            </Text>
          </Box>
          {items.map((item, index) => (
            <DrawerItem key={item.icon} {...item}/>
          ))}
        </Box>
        <Box
          width={DRAWER_WIDTH}
          backgroundColor="white"
          overflow="hidden"
          height={height * 0.61}
          borderTopLeftRadius="xl"
        >
          <Image
            source={assets[0]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: -height * (1 - 0.61),
              width: DRAWER_WIDTH,
              height,
              borderTopLeftRadius: theme.borderRadii.xl
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Drawer;