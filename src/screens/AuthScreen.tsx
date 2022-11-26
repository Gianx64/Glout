import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native';
import { LogInComponent } from '../components/authComponents/LoginComponent';
import { SignInComponents } from '../components/authComponents/SignInComponent';

export const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            {/* <LogInComponent /> */}
            <SignInComponents />
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
