import React from 'react'
import { Text, TouchableOpacity} from 'react-native'
import styles from '../../styles/Styles';


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