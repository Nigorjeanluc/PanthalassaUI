import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// import styles from '../styles/header.scss';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title: 'Shopping List',
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
});

export default Header;