import React, { useState } from 'react';
import { sub } from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';
import { Box, Header } from '../../../components';
import { HomeNavigationProps } from '../../../components/Navigation';
import Background from './Background';
import Card from './Card';
import Categories from './Categories';

const cards = [
  {
    index: 3,
    source: require("../../../../assets/home/activity/akagera.png"),
    title: 'Akagera National Park',
    subtitle: 'The relatively warm and low-lying plains of Akagera comprise savannah, woodland, wetland and a dozen lakes.',
  },
  {
    index: 2,
    source: require("../../../../assets/home/activity/nyungwe.png"),
    title: 'Nyungwe National Park',
    subtitle: 'Nyungwe is rich in biodiversity and spectacularly beautiful.',
  },
  {
    index: 1,
    source: require("../../../../assets/onboarding/2.jpg"),
    title: 'Virunga National Park',
    subtitle: 'The unique opportunity to see mountain gorillas in their natural habitat is unforgettable.',
  },
  {
    index: 0,
    source: require("../../../../assets/home/activity/kivu.png"),
    title: 'Lake Kivu',
    subtitle: 'Lake Kivu in the west of Rwanda is surrounded by magnificent mountains and has deep emerald green waters covering a surface area of 2,700 km2.',
  },
];

const step = 1/(cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  return (
    <Box
      flex={1}
      backgroundColor="white"
    >
      <Header
        title="Activities"
        left={{
          icon: "menu",
          onPress: () => navigation.openDrawer()
        }}
        right={{
          icon: "shopping-bag",
          onPress: () => true
        }}
      />
      <Categories />
      <Box flex={1}>
        <Background />
        {
          cards.map(({ index, source, title, subtitle }) => currentIndex < index * step + step  && (
            <Card
              key={index}
              position={sub(index * step, aIndex)}
              onSwipe={() => setCurrentIndex((prev) => prev + step)}
              {...{ source, step, title, subtitle }}
            />
          ))
        }
      </Box>
    </Box>
  );
}

export default OutfitIdeas;