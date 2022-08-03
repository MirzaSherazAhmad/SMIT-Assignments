
import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, SafeAreaView, KeyboardAvoidingView } from 'react-native'

import { TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import useTodo from '../todo/useTodo';




const deviceWidth = Dimensions.get('window').width;

function Todo({ Navigation }) {
    const {
        addList, add, setAddList, setAdd, addData, deleteData
    } = useTodo();


    return (

        <View  >
            <ScrollView >

                <Text style={styles.text}>
                    TODO APP
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TextInput style={styles.field}
                        value={add}
                        onChangeText={setAdd}
                        placeholder=" Enter a Task"
                        placeholderTextColor={"black"}
 

                    />
                    <TouchableOpacity onPress={addData}>
                        <Text style={{ fontSize: 29, height: 50, marginLeft: 10, width: 50, textAlign: 'center', borderRadius: 50, paddingTop: 10, color: 'white', backgroundColor: 'black', marginRight: 5 }}>+</Text>
                    </TouchableOpacity>

                </View>

                {
                    (addList.length === 0) ? <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 6 }}>No tasks add...</Text> : <FlatList
                        data={addList}
                        renderItem={((ele, index) => <KeyboardAvoidingView>
                            <SafeAreaView style={styles.container}>
                                <View >


                                    <Text style={styles.item}>{ele.item}

                                        <View style={styles.icon}>
                                            <TouchableOpacity onPress={() => deleteData(index)} >
                                                <Icon name="trash" color={'white'} size={22} style={{ paddingHorizontal: 220 }} />
                                            </TouchableOpacity>



                                        </View>
                                    </Text>


                                </View>
                            </SafeAreaView>

                        </KeyboardAvoidingView>)}
                        keyExtractor={item => item.id}

                    />
                }
            </ScrollView>

        </View >
    )
}





const styles = StyleSheet.create({

    text: {
        marginVertical: 30,
        fontSize: 30,
        width: deviceWidth,
        fontFamily: 'bold',
        color: 'red',
        textAlign: 'center'

    },
    field: {

        borderWidth: 1,
        width: 3 * (deviceWidth / 4),
        borderRadius: 20,
        marginLeft: 40

    },
    container: {
        flex: 1,
        marginTop: 20

    },
    item: {

        backgroundColor: 'black',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        fontSize: 20,
        color: 'white',

    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }

})
export default Todo;