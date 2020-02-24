/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ImageDetail = ({ imgSrc, imgScore, title }) => (
    
    <View>
        <Image
            style={styles.image}
            source={imgSrc}
        />
        <Text>{title}</Text>
        <Text>{imgScore}</Text>
    </View>
    
);

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ImageDetail;

