import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const AddModels = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="pluscircle" size={40} color="#fff" />
    </TouchableOpacity>
  );
};

export default AddModels;
