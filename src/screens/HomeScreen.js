import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View>
      <Text style={styles.text}>Yes this is a dog!</Text>
      <Button
        title="Go to components DEMO"
        style={styles.button}
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List DEMO"
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      />
    </View>
);
const styles = StyleSheet.create({
  button: {
    paddingBottom: 10
  },
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
