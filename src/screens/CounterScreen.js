/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button
                title='Increate'
                onPress={() => {
                    // counter++;
                    setCounter(counter + 1);
                }}
            />
            <Button
                title='Decreate'
                onPress={() => {
                    // counter++;
                    setCounter(counter - 1);
                }}
            />
            <Text>Current count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;
