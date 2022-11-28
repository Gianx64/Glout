import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export const MapComponent = () => {
    const [ubicacion, setUbicacion] = useState({
        lat: -33.44,
        lon: -70.65,
    });

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
            provider={'google'}
            showsUserLocation
            showsMyLocationButton
            initialRegion={{
                latitude: ubicacion.lat,
                longitude: ubicacion.lon,
                latitudeDelta: 0.5,
                longitudeDelta: 0.2,
            }} />
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