/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => (
    
    <View>
        <Text>{color}</Text>
        <Button 
            onPress={() => onIncrease()}
            title={`Increase ${color}`} />
        <Button 
            onPress={() => onDecrease()}
            title={`Decrease ${color}`} />
    </View>
    
);

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ColorCounter;

