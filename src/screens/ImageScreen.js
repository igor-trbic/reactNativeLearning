/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => (
    <View>
        <ImageDetail
            title='Border Collie'
            imgSrc={require('../../assets/Yuki.jpg')}
            imgScore='5'
        />
        <ImageDetail
            title='Malinoa'
            imgSrc={require('../../assets/malinoa.jpg')}
            imgScore='2'
        />
        <ImageDetail
            title='Malamute'
            imgSrc={require('../../assets/malamute.jpg')}
            imgScore='3'
        />
        <ImageDetail
            title='Hasky'
            imgSrc={require('../../assets/husky.jpg')}
            imgScore='4'
        />
    </View>
);

const styles = StyleSheet.create({

});

export default ImageScreen;
