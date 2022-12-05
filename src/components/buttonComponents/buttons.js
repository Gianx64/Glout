import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'


export function BlackButton(props){

    const { onPress, text } = props

    return(
        <TouchableOpacity
        style={{
            ...styles.button,
            backgroundColor: '#0b0b0b'
        }}
        onPress = { onPress }
        >
            <Text
            style={{
                ...styles.buttonText,
                color:'white',
            }}>
                { text }
            </Text>
        </TouchableOpacity>
    )

}

export function LikeButton(props){

    const { onPress, text } = props

    return(
        <TouchableOpacity
        style={{
            ...styles.bDer,
            backgroundColor: '#4646F5',
            alignSelf:'center',
            width:'30%',
        }}
        onPress = { onPress }
        >
            <Text
            style={{
                ...styles.buttonText,
                color:'white',
            }}>
                { text }
            </Text>
        </TouchableOpacity>
    )

}

export function DislikeButton(props){

    const { onPress, text } = props

    return(
        <TouchableOpacity
        style={{
            ...styles.bIzq,
            backgroundColor: '#F0325D',
            alignSelf:'center',
            width:'30%',
        }}
        onPress = { onPress }
        >
            <Text
            style={{
                ...styles.buttonText,
                color:'white',
            }}>
                { text }
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        width:'80%',
        paddingVertical: 10,
        marginVertical: 15,
        textAlign:'center',
        alignSelf:'center',
        borderRadius: 20,
    },

    buttonText:{
        textAlign:'center',
    },

    bDer:{
        paddingVertical: 10,
        marginVertical:10,
        textAlign:'center',
        borderRadius: 30,
        right: 70,
    },

    bIzq:{
        paddingVertical: 10,
        marginVertical:10,
        textAlign:'center',
        borderRadius: 30,
        left: 70,
        top: -59,
    },


})
