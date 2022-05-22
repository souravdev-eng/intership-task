import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const SearchBox = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search "
        style={styles.search}
      />
    </View>
  );
};

export default SearchBox;
