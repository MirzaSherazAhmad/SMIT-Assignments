import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BirthDay from '../birthDay/BirthDay';
import Home from '../Home';
import Confetti from '../components/confetti/Confetti';






const Stack = createNativeStackNavigator();



function NavBar() {

    return (


        <NavigationContainer>
            <Stack.Navigator initialRouteName='BirthDay'>
                <Stack.Screen name="BirthDay" component={BirthDay} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Confetti" component={Confetti} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>




    );
}
export default NavBar;