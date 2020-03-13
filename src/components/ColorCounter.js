/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, Image, View, Button } from 'react-native';

const ColorCounter = ({ color }) => (
    
    <View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`} />
        <Button title={`Decrease ${color}`} />
    </View>
    
);

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ColorCounter;

