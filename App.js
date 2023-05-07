import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titale}>Hello</Text>
      <Text style={styles.subTitle}>Sign in to your account</Text>
      <TextInput
        placeholder='Enter your email'
        style={styles.TextInput}
      />
       <TextInput
        placeholder='Enter your Password'
        secureTextEntry={true}
        style={styles.TextInput}
      />
      <Text style={styles.you}>Forgot your Password?</Text>

 
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>SIGIN IN</Text>
    </TouchableOpacity>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titale: {
    fontSize:80,
    color:'344340 ',
    fontWeight:'bold',
  },
  subTitle:{
    fontSize:20,
    color:'gray',
  },
  TextInput:{
    borderWidth:1,
    borderColor:'gray', 
    paddingStart:30,
    padding:10,
    width:'80%',
    height:50,
    marginTop:20,
    borderRadius:30,
    backgroundColor:'#fff'
    
  },
  you:{
    fontSize:13,
    color:'gray',
    marginTop:30,
  },
  btn:{
    backgroundColor: 'black',
    padding: 10, 
    width:200,
    borderRadius: 5,
    marginTop:30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    
  },

});
