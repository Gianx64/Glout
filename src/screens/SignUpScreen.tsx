import React from 'react'
import { StatusBar, View, StyleSheet, Image } from 'react-native';
import { SignUpComponent } from '../components/authComponents/SignUpComponent';
import styles from '../styles/Styles';

export const SignUpScreen = () => {
    return (
    <>
         <View style={styles.imageSignUp}>
             <Image
                source={require('../../assets/icon.png')}
                style={{ width: 150, height: 150 }}
             />
         </View>
        <View style={styles.container}>
            <StatusBar />
            <SignUpComponent />
        </View>
    </>
    )
}

export default SignUpScreen

