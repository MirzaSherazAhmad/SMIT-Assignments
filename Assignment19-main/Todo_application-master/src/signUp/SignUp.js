
import React from 'react';


import { Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';



function SignUp({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const userSign = async () => {
    if (!email || !password) {
      alert('please enter filled')
    }
    else {
      try {
        let userResponse = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );


        console.log('userResponse', userResponse);
        if (userResponse) {
          navigation.navigate('Login');


        }
        alert("SignUp DONE ")

        setEmail('')
        setPassword('')


      } catch (error) {
        alert("already exist email")
        console.log('error', error);
      }
    }
  }







  return (
    <View>
      <TextInput
        value={email}
        placeholder='Email'
        style={{ color: "black" }}
        placeholderTextColor={'black'}

        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder='Password'
        value={password}
        style={{ color: "black" }}
        placeholderTextColor={'black'}


        onChangeText={text => setPassword(text)}
      />


      <Button title='SignUp' onPress={() => userSign()}></Button>


    </View>
  );
}
export default SignUp;
