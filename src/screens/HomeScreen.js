import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => <Text style={styles.text}>Yes this is a dog!</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
