import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Kotak = () => {
  return (
    <View style={styles.Kotak}>
      <Text style={styles.tulisan}>ini kotak</Text>
    </View>
  );
};

export default Kotak;

const styles = StyleSheet.create({
  Kotak: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  tulisan: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});
