import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Zeljko 123';

    return (
        <View>
            <Text style={styles.biggerText}>Getting started with React Native</Text>
            <Text style={styles.smallerText}>My name is { myName }</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    biggerText: {
        fontSize: 45
    },
    smallerText: {
        fontSize: 20
    }
});

export default ComponentsScreen;
