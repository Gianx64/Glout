import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapComponent } from '../components/mapComponents/MapComponent';

export const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
            provider={'google'}
            showsUserLocation
            showsMyLocationButton
            initialRegion={{
                latitude: ubicacion.latitude,
                longitude: ubicacion.longitude,
                latitudeDelta: 0.5,
                longitudeDelta: 0.2,
            }}>
                <Marker draggable
                    coordinate={ubicacion}
                    onDragEnd={(direction) => setUbicacion(direction.nativeEvent.coordinate)}
                >
                    <Callout onPress= {() => {navigation.navigate('SaveStoreScreen', { ubicacion })}}>
                        <TouchableHighlight>
                            <View>
                                <Text>Ingresar tienda</Text>
                            </View>
                        </TouchableHighlight>
                    </Callout>
                </Marker>
                {data.map((store, i) => {
                    return (
                        <Marker
                            pinColor='blue'
                            coordinate={store.coords}
                        >
                            <Callout onPress= {() => {navigation.navigate('ShowStoreScreen', { store })}}>
                                <TouchableHighlight>
                                    <View>
                                        <Text>Ver tienda {store.description}</Text>
                                    </View>
                                </TouchableHighlight>
                            </Callout>
                        </Marker>
                    ) 
                })}
			</MapView>
            <FAB
                style={{mapstyle}}
                icon="plus" />
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