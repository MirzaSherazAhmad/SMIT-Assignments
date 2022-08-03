import React from 'react';


import { Text, View, TextInput, Button, StatusBar, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';




function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false)

    const userLogin = async () => {
        if (!email || !password) {
            alert('please enter filled')
        }
        else {
            try {
                let userResponse = await auth().signInWithEmailAndPassword(
                    email,
                    password,
                );


                console.log('userResponse', userResponse.user.email);
                if (userResponse) {
                    navigation.navigate('Todo');



                }
              



                alert("Login DONE ")
                setEmail('')
                setPassword('')


            } catch (error) {
                alert("please first SignUp")
                {navigation.navigate('SignUp')}
                
                
                console.log('error', error);
            }
        }
    }







    return (
        <View>
                    <TextInput
                value={email}
                placeholder='Email'
                placeholderTextColor={'black'}
                style={{ color: "black" }}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder='Password'
                value={password}
                placeholderTextColor={'black'}
                style={{ color: "black" }}



                onChangeText={text => setPassword(text)}
            />

            <View>
                <Button title='Login' onPress={() => userLogin()} ></Button>

            </View>



        </View>

        // <ScrollView style={{ backgroundColor: 'white' }}>
        //     <KeyboardAvoidingView>
        //         <View style={styles.container}>
        //             <Image source={require("../assets/login.jpg")}
        //                 resizeMode="center"
        //                 style={styles.Image}
        //             />
        //             <Text style={styles.text}>Welcome Back</Text>
        //             <Text style={styles.body}>Login In To Your Account</Text>
        //         </View>
        //         <TextInput
        //             style={{ borderColor: 'blue', width: '90%', marginLeft: 12, paddingLeft: 10, borderRadius: 100, marginVertical: 20, color: 'blue', backgroundColor: 'grey' }}
        //             value={email}
        //             placeholder='Enter Your Email'
        //             placeholderTextColor={'white'}

        //             onChangeText={text => setEmail(text)}
        //         />
        //         <TextInput
        //             style={{ borderColor: 'blue', width: '90%', marginLeft: 12, borderRadius: 100, marginVertical: 10, color: 'blue', backgroundColor: 'grey' }}

        //             placeholder='Enter Your Password'
        //             value={password}
        //             placeholderTextColor={'white'}

        //             onChangeText={text => setPassword(text)}
        //         />
        //         <View>
        //             <Button title='Login' onPress={() => userLogin()} />
        //         </View>

        //     </KeyboardAvoidingView>


        // </ScrollView>
    );
}

export default Login;



