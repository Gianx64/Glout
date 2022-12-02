import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { ReadDataComponent } from '../components/databaseComponents/ReadDataComponent';


export const HomeScreen = ({ navigation }:any) => {
    return (
        <View style={styles.container}>
            {/* <WriteDataComponent />*/}
            <ReadDataComponent />
            <Button title={'Registrarse'} onPress={() => {navigation.navigate('SignUp Screen')}} />
            <Button title={'Iniciar Sesión'} onPress={() => {navigation.navigate('SignIn Screen')}} />
            <Button title={'Ir al mapa'} onPress={() => {navigation.navigate('Map Screen')}} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});