import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MapComponent } from '../components/MapComponent';

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapComponent />
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
