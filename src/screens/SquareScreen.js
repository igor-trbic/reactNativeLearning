/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <ColorCounter color="Red" />
            <ColorCounter color="Blue" />
            <ColorCounter color="Green" />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;
