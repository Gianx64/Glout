import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native';
import { SignUpComponent } from '../components/authComponents/SignUpComponent';

export const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <SignUpComponent />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});