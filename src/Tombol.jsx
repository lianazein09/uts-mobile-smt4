import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Tombol = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    marginHorizontal: 10,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignContent: 'center',
    width: 100,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});
