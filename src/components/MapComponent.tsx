import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { writeStoreData } from '../firebase/database';

export const MapComponent = () => {
    const [ubicacion, setUbicacion] = useState({
        latitude: -33.44,
        longitude: -70.65,
    });

	useEffect(() => {
		getLocationPermission();
	}, [])

	async function getLocationPermission() {
		let peticion = await Location.requestForegroundPermissionsAsync();
		if (peticion.status !== 'granted') {
			alert('Permiso denegado.');
			return;
		}
		let location = await Location.getCurrentPositionAsync({});
		const current = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		}
		setUbicacion(current);
	}
	
	const ingresarUbicacion = (ubicacion:{latitude:number, longitude:number}) => {
		// TODO: Guardar en base de datos
		console.log('Latitud: ' + ubicacion.latitude + ' , longitud: ' + ubicacion.longitude);
        writeStoreData(ubicacion);
    }

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
					<Callout onPress= {() => ingresarUbicacion(ubicacion)}>
                      <TouchableHighlight>
                          <View>
                              <Text>Ingresar tienda</Text>
                          </View>
                      </TouchableHighlight>
                    </Callout>
				</Marker>
			</MapView>
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