import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const ShowStoreScreen = ({ navigator, route }:any) => {
    return (
        <View style={styles.container}>
            <Text>Tienda: {route.params.name}</Text>
            <Text>¿Tiene delivery? {route.params.delivery ? 'Si' : 'No'}</Text>
            <Text>Contacto: {route.params.contact}</Text>
            <Text>Descripción: {route.params.description}</Text>
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