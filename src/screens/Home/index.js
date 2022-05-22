import {View, TouchableWithoutFeedback, Keyboard, FlatList} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

import SearchBox from '../../components/SearchBox';
import AddModels from '../../components/AddModels';
import ListItem from '../../components/ListItems';
import ModelBox from '../../components/Model';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');

  const handelAdd = t => {
    setItems([...items, item]);
    setModalVisible(false);
    setItem('');
  };
  const searchFilter = items.filter(item => {
    return item.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient
          colors={['#462eb8', '#a134d4']}
          style={styles.container}>
          <View style={styles.headerContainer}>
            <SearchBox value={search} onChangeText={t => setSearch(t)} />
            <AddModels onPress={() => setModalVisible(true)} />
          </View>
          <FlatList
            data={searchFilter}
            renderItem={({item}) => <ListItem item={item} />}
            keyExtractor={item => item}
          />
        </LinearGradient>
      </TouchableWithoutFeedback>
      <ModelBox
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        item={item}
        onChangeItemText={t => setItem(t)}
        onAdd={handelAdd}
      />
    </>
  );
};

export default HomeScreen;
