import React from 'react';
import { ScrollView, View } from 'react-native';

import Category from "./Category";

const categories = [
  {
    id: "newin",
    title: "National Parks",
    color: "#FFE8E0",
    image: require('../../../../assets/home/gorilla.png')
  },
  {
    id: "summer",
    title: "Hotels",
    color: "#F1E0FF",
    image: require('../../../../assets/home/hotel.png')
  },
  {
    id: "activewear",
    title: "Restaurants",
    color: "#BFEAF5",
    image: require('../../../../assets/home/resto.png')
  },
  {
    id: "outlet",
    title: "Museums",
    color: "#BFEAF5",
    image: require('../../../../assets/home/museum.png')
  },
  {
    id: "accesories",
    title: "Itineraries",
    color: "#FFE8E9",
    image: require('../../../../assets/home/itinerary.png')
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Categories;
