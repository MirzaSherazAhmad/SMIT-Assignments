import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';


export default function Confetti() {

    const backImage = [
        {
            image: {
                uri: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnRoZGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            }
        },
    ]

    return (
        <>
            <View style={{ flex: 1 }}>
                <ImageBackground source={backImage[0].image} resizeMode="cover" style={{ flex: 1 }} >


                    <ConfettiCannon count={350} origin={{ x: 20, y: 10 }}
                    />


                    <Text style={{
                        fontSize: 30, display: 'flex', marginTop: 100, fontFamily: 'Foundation',
                        justifyContent: 'center', alignSelf: 'center', color: 'red'
                    }}>
                        HAPPY BIRTHDAY
                    </Text>
                </ImageBackground>
            </View>
        </>


    )
}