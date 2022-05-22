import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const ListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default ListItem;
