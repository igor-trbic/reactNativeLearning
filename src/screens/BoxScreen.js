import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text1Style}>Child 1</Text>
            <Text style={styles.text2Style}>Child 2</Text>
            <Text style={styles.text3Style}>Child 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
      borderWidth: 3,
      borderColor: 'black',
      height: 200,
      alignItems: 'stretch'
    },
    text1Style: {
      borderWidth: 3,
      borderColor: 'red',
      padding: 5,
    },
    text2Style: {
      borderWidth: 3,
      borderColor: 'blue',
      padding: 5,
      ...StyleSheet.absoluteFillObject
    },
    text3Style: {
      borderWidth: 3,
      borderColor: 'purple',
      padding: 5,
    }
});

export default BoxScreen;
