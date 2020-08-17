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
    source: require("../../../../assets/onboarding/2.jpg"),
  },
  {
    index: 2,
    source: require("../../../../assets/onboarding/2.jpg"),
  },
  {
    index: 1,
    source: require("../../../../assets/onboarding/2.jpg"),
  },
  {
    index: 0,
    source: require("../../../../assets/onboarding/2.jpg"),
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
        title="Trip Ideas"
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
          cards.map(({ index, source }) => currentIndex < index * step + step  && (
            <Card
              key={index}
              position={sub(index * step, aIndex)}
              onSwipe={() => setCurrentIndex((prev) => prev + step)}
              {...{ source, step }}
            />
          ))
        }
      </Box>
    </Box>
  );
}

export default OutfitIdeas;