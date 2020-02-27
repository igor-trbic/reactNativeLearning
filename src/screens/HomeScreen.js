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
      <Button
        title="Go to Image Screen DEMO"
        style={styles.button}
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Screen DEMO"
        style={styles.button}
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Screen DEMO"
        style={styles.button}
        onPress={() => navigation.navigate('Color')}
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
