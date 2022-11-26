import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export const MapComponent = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} provider={'google'} showsUserLocation showsMyLocationButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});