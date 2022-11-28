import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native';
import { SignInComponent } from '../components/authComponents/SignInComponent';

export const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <SignInComponent />
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
