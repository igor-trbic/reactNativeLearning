/* eslint-disable global-require */
import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  
  return (
    <View>
      <Text>Enter password</Text>
      <TextInput
        autoCapitalize = "none"
        autoCorrect = { false }
        style = { styles.input }
        value = { password }
        onChangeText = { (newVal) => {
          setPassword(newVal)
        } }
        textContentType = "password"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
