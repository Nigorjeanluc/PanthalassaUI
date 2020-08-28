import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageProps } from 'react-native';
import { Text, Box, BorderlessTap } from "../../../components";

const INNER_RADIUS = 30;
const IMAGE_RADIUS = 20;
const OUTER_RADIUS = 34;

interface CategoryProps {
  category: {
    id: string;
    color: string;
    title: string;
    image: ImageProps;
  };
}

const Category = ({ category: {color: backgroundColor, title, image}}: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
      <Box
        marginLeft="m"
        marginTop="s"
        alignItems="center"
      >
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {
            selected && (
              <View style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: backgroundColor,
                borderWidth: 2
              }}/>
            )
          }
          <View style={{
            width: INNER_RADIUS * 2,
            height: INNER_RADIUS * 2,
            borderRadius: INNER_RADIUS,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor
          }}>
            <Image source={image} style={{
              width: IMAGE_RADIUS * 2,
              height: IMAGE_RADIUS * 2,
              justifyContent: 'center',
              alignItems: 'center'
            }} />
          </View>
        </Box>
        <Text
          textAlign="center"
          marginTop="s"
        >
          {title}
        </Text>
      </Box>
    </BorderlessTap>
  );
}
export default Category;
