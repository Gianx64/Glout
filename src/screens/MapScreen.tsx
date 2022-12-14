import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapComponent } from '../components/mapComponents/MapComponent';

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapComponent />
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
});