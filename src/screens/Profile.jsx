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

const Data = [
  {id: 1, label: 'Liana Zein'},
];

const Profile = ({navigation}) => {
  return (
    <View backgroundColor="pink">
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Search')}
        style={styles.btn}>
        <Text style={styles.txt}>PROFILE </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'black',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
