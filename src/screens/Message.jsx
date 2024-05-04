import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import IconMenu from '../components/IconMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

const Data = [
  {id: 1, label: 'Susi Rahma'},
  {id: 5, label: 'Nuna.Prameswari'},
  {id: 4, label: 'DianaUfa'},
  {id: 4, label: 'Amilts'},
  {id: 5, label: 'Meifinatlmr'},
  {id: 5, label: 'Asri'},
];

const Message = ({navigation}) => {
  return (
    <View style={styles.container} backgroundColor="pink">
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        vertical={true}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
