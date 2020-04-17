/* eslint-disable global-require */
import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
    // state = { counter: number }
    // action = { type: 'cnt_increase' || 'cnt_decrease', payload: 1 || -1 }

    switch (action.type) {
        case 'cnt_increase':
            return { ...state, counter: state.counter + action.payload };
        case 'cnt_decrease':
            return state.counter <= 0
                ? state
                : { ...state, counter: state.counter - action.payload };
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    return (
        <View>
            <Button
                title='Increate'
                onPress={() => {
                    // counter++;
                    dispatch({type: 'cnt_increase', payload: 1});
                }}
            />
            <Button
                title='Decreate'
                onPress={() => {
                    // counter--;
                    dispatch({type: 'cnt_decrease', payload: 1});
                }}
            />
            <Text>Current count: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;
