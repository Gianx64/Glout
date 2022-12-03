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
            <Button title={'Ir a perfil'} onPress={() => {navigation.navigate('User Screen')}} />
            <Button title={'Ir al mapa'} onPress={() => {navigation.navigate('Map Screen')}} />
            <Button title={'Ver Tienda'} onPress={() => {navigation.navigate('ShowStoreScreen', 
            {"contact": "FB: Golf", "delivery": false, "description": "comida para comer", "latitude": -33.41437837662778, "likes": 0, "longitude": -70.59224870055914, "name": "El Golf", "submitter": "gian@gian.cl"}
            )}} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});