import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import IconMenu from '../components/IconMenu';

const Data = [
  {id: 1, label: 'Your Story'},
  {id: 5, label: 'Nindia'},
  {id: 4, label: 'DianaUlfa'},
  {id: 4, label: 'Amilts'},
  {id: 5, label: 'Meifinatlmr'},
];
const Data1  =[
{id: 1, label: 'Alex Porat'},
];

const Home = ({navigation}) => {
  return (
    <View style={styles.container} backgroundColor="pink">
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <FlatList
        data={Data1}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
      />
      <Text style={{fontWeight: 'bold'}}>
        Alex Porat
      <Text style={{color: 'blue'}}> and red</Text>
      </Text>
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhMfbnyivmDkpfe-Rl5yZ8ZRsNpcL4skXcA&s'}}
             style={{width:400, height:400}} 
      />
    </View>

  );
};

export default Home;

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
    color: 'green',
  },
});
