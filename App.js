import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [name,setName] = useState('qwerty');

  const clickHandler = () => {
    setName('test');
    console.log('test');
  }

  return (
    <View style={styles.container}>
      <Text>test name iss {name} </Text>
      <StatusBar style="auto" />
      <View style = {styles.buttonContainer}>
        <Button title='update state' onPress={() => {console.log('a')}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
});
