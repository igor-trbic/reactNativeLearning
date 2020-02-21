/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => (
    <View>
        <ImageDetail title='Border Collie' imgSrc={require('../../assets/Yuki.jpg')} />
        <ImageDetail title='Malinoa' imgSrc={require('../../assets/malinoa.jpg')} />
        <ImageDetail title='Malamute' imgSrc={require('../../assets/malamute.jpg')} />
        <ImageDetail title='Hasky' imgSrc={require('../../assets/husky.jpg')} />
    </View>
);

const styles = StyleSheet.create({

});

export default ImageScreen;
