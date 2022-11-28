import React from 'react'
import { StatusBar, View, StyleSheet } from 'react-native';
import { RegisterComponent } from '../components/authComponents/RegisterComponent';

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <RegisterComponent />
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
