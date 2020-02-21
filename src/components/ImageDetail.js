/* eslint-disable global-require */
import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ImageDetail = (props) => (
    
    <View>
        <Image
            style={styles.image}
            source={props.imgSrc}
        />
        <Text>{props.title}</Text>
    </View>
    
);

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ImageDetail;

