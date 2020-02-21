import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {
            name: 'friend1',
            age: 12
        },
        {
            name: 'friend2',
            age: 13
        },
        {
            name: 'friend3',
            age: 14
        },
        {
            name: 'friend4',
            age: 15
        },
        {
            name: 'friend5',
            age: 16
        },
        {
            name: 'friend6',
            age: 17
        },
        {
            name: 'friend7',
            age: 18
        },
        {
            name: 'friend8',
            age: 19
        },
        {
            name: 'friend9',
            age: 11
        },
    ];

    return (
        <FlatList
            vertical
            keyExtractor={
                (friend) => friend.name
            }
            data={friends}
            renderItem={({ item }) => <Text style={styles.textStyle}>
                { item.name } - Age: { item.age }
            </Text>}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;
