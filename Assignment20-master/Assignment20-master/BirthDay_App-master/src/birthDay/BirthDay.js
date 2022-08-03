import { View, Text, Button, ActivityIndicator, ImageBackground } from 'react-native'
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CountDown from 'react-native-countdown-component';
import { collection, addDoc, getDocs } from "firebase/firestore/lite";

import { db } from "../app/src/config/firebase"




export default function BirthDay({ navigation }) {



    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState('')
    const [products, setProducts] = useState([])

    const day = new Date()
    const getday = day.getDay();
    console.log(getday);
    const currentDate = new Date();
    const getdate = currentDate.getDate();
    const getmonth = currentDate.getMonth();
    const getyea = currentDate.getFullYear();
    const finalDate = getdate + "/" + (getmonth + 1) + "/" + getyea;

    const countDate = currentDate.getTime()
    const fixedDate = date.getTime();

    const fixedCount = (fixedDate - countDate) / 1000;

    const handlePress = () => {

        alert("Count down")
    }

    const handleFinish = () => {
        navigation.navigate('Confetti');
    }





    const arrData = [
        {
            title: 'Sunday',
            image: {
                uri: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

            }
        },
        {
            title: 'Monday',
            image: {
                uri: 'https://images.unsplash.com/photo-1657315627733-3feecc8c1f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

            }
        },
        {
            title: 'Tuesday',
            image: {
                uri: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


            }
        },
        {
            title: 'Wenesday',
            image: {
                uri: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

            }
        },
        {
            title: 'Thursday',
            image: {
                uri: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


            }
        },
        {
            title: 'Friday',
            image: {
                uri: 'https://images.unsplash.com/photo-1657343676142-858c6efd94a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'

            }
        },
        {
            title: 'Saturday',
            image: {
                uri: 'https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

            }
        },



    ];







    return (
        <View style={{ flex: 1 }}>

            {/* <Text>
                {arrData[0].title}
            </Text> */}
            <ImageBackground source={arrData[date.getDay()].image} resizeMode="cover" style={{ flex: 1 }} >
                <View style={{ margin: 50 }}>
                    <Text style={{ fontSize: 45, color: 'red', justifyContent: 'center', alignSelf: 'center' }}>
                        {arrData[date.getDay()].title}
                    </Text>
                    < Text style={{ fontSize: 35, color: 'red', justifyContent: 'center', alignSelf: 'center' }}>  {date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}
                    </Text>
                    {/* <Text style={{ color: 'red', fontSize: 30 }}>{finalDate}</Text> */}
                </View>



                <>
                    <View style={{ display: 'flex', alignSelf: 'center', marginTop: 250 }}>

                        <Button title="Select date" onPress={() => setOpen(true)} />
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => {

                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />


                    </View>


                </>
                <View style={{ flex: 4, padding: 50 }}>
                    <CountDown
                        size={20}
                        until={fixedCount}
                        onPress={() => { handlePress() }}
                        onFinish={() => {
                            navigation.navigate('Confetti');
                        }}
                    />
                </View>


            </ImageBackground>
        </View>

    )

}



