import React, { useState } from 'react'
import Login from '../login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../signUp/SignUp';
import Todo from '../todo/Todo';




const Stack = createNativeStackNavigator();


function NavBar() {

    return (

        
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Todo" component={Todo} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} />



            </Stack.Navigator>
        </NavigationContainer>


    );
}
export default NavBar;