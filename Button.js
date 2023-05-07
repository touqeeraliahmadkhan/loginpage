import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Click Me!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyButton;
