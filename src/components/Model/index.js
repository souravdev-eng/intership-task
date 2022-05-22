import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import styles from './Styles';

const ModelBox = ({visible, onClose, item, onChangeItemText, onAdd}) => {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.model}>
        <TouchableOpacity
          style={{position: 'absolute', right: 15, top: 15}}
          onPress={onClose}>
          <Icons name="closecircle" size={30} color="red" />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Add Items"
            style={styles.textInput}
            value={item}
            onChangeText={onChangeItemText}
          />
          {item.length > 0 && (
            <TouchableOpacity style={styles.add} onPress={onAdd}>
              <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModelBox;
