import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MapComponent } from '../components/mapComponents/MapComponent';
import { Callout } from 'react-native-maps';
import { FAB } from 'react-native-paper';

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapComponent />
            <Callout style={styles.buttonCallout}>
                <TouchableOpacity
                    style={[styles.touchable]}
                    onPress={() => alert('El pin rojo se puede arrastrar manteniéndolo presionado y su función es añadir una tienda, para hacer esto, toque el pin rojo cuando lo posicione donde desea, luego, toque el texto "Ingresar tienda", esto le llevará al formulario para ingresar los datos de la tienda.\nLos pines azules son ubicaciones de tiendas. Para ver los detalles de la tienda, toque el pin que desee y luego el texto "Tienda: ...".')}
                >
                    <Text style={styles.touchableText}>Ayuda</Text>
                </TouchableOpacity>
            </Callout>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    //fab
    flex: {
        flex: 1
    },
    fab: {
        position: "absolute",
        right: 50,
        bottom: 50,
        margin: 20
    },
    //fab
    buttonCallout: {
        flex: 1,
        flexDirection:'row',
        position:'absolute',
        bottom:10,
        alignSelf: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        borderWidth: 0.5,
        borderRadius: 100
    },
    touchable: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 10
    },
    touchableText: {
        fontSize: 16
    },
});