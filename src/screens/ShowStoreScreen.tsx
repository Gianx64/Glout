import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ShowStoreScreen = ({ navigator, route }:any) => {
    console.log(route.params);
    return (
        <View style={styles.container}>
            <Text>Tienda: {route.params.store.name ?? 'No se sabe'}</Text>
            <Text>¿Tiene delivery? {route.params.store.delivery ? 'Si' : 'No'}</Text>
            <Text>Contacto: {route.params.store.contact ?? 'No se sabe'}</Text>
            <Text>Descripción: {route.params.store.description ?? 'No se sabe'}</Text>
        </View>
    )
}

export default ShowStoreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
});