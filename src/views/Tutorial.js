import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert
} from 'react-native';
import { uuid } from 'uuidv4';

import Header from '../components/Header';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import { Button } from 'native-base';

const Tutorial = ({ navigation }) => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{
          id: uuid(),
          text
        }, ...prevItems];
      });
    }
  }

  return (
    <View style={styles.container}>
        <Header />
        <AddItem addItem={addItem}/>
        <FlatList 
            data={items}
            renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
        />
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
            }
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    // text: {
    //   color: 'darkslateblue',
    //   fontSize: 20
    // },
    // img: {
    //   width: 100,
    //   height: 100,
    //   borderRadius: 100/2
    // }
});

export default Tutorial;