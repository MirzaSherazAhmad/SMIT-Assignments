


import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Login from './src/login/Login';



import NavBar from './src/navigation/NavBar';
import SignUp from './src/signUp/SignUp';




function App() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('');

  // const userSign = async () => {
  //   if (!email || !password) {
  //     alert('please enter filled')
  //   }
  //   else {
  //     try {
  //       let userResponse = await auth().createUserWithEmailAndPassword(
  //         email,
  //         password,
  //       );


  //       console.log('userResponse', userResponse.user);
  //       alert("SIGNUP DONE ")


  //     } catch (error) {
  //       alert("already exist email")
  //       console.log('error', error);
  //     }
  //   }
  // }







  return (

    <NavBar />

  );
}
export default App;
