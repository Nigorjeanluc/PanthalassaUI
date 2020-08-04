import React from 'react';
import { Box, Text, RoundedIconButton } from '../../../components';
import { Dimensions, Image } from 'react-native';
import { theme } from '../../../components/Theme';
import DrawerItem, {DrawerItemProps} from './DrawerItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 350 / 1125;
const height = width * aspectRatio;
const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary"
  },
  {
    icon: "heart",
    label: "Favorites Places",
    screen: "FavoritesOutfits",
    color: "orange"
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
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
    screen: "NotificationsSettings",
    color: "violet"
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary"
  }
]

const Drawer = () => {
  // const insets = useSafeAreaInsets();
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
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="m"
          paddingTop="l"
        >
          <RoundedIconButton
            size={24}
            name="x"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            size={24}
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
            onPress={() => true}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="primaryLight" />
        <Image
            source={require('../../../../assets/patterns/imigongo.jpg')}
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
          {items.map((item) => (
            <DrawerItem key={item.screen} {...item}/>
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
            source={require('../../../../assets/patterns/imigongo.jpg')}
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