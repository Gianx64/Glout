import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { readStoresData } from '../firebase/database';

type store = {
  contact: string,
  delivery: boolean,
  description: string,
  latitude: number,
  likes: number,
  longitude: number,
  name: string,
  submitter: string
}
import { FAB } from 'react-native-paper';
import { data } from './data';
/* import { FAB } from "../../FAB"; */

import {
    StyleSheet,
    Animated,
    Image,
    ViewProps,
    ImageURISource,
    ImageRequireSource,
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mapstyle } from './MapsStyle';
  



export const MapScreen = ({ navigation }:any) => {
    const [ubicacion, setUbicacion] = useState({
        latitude: -33.44,
        longitude: -70.65,
    });
    const stores = readStoresData();
    //const [stores, setStores] = useState({});

	useEffect(() => {
		getLocationPermission();
        //setStores(readStoresData());
        console.log(stores);
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
                {data.map((val, i) => {
                    return (
                        <Marker
                            coordinate={val.coords}
                        />
                    ) 
                })}
			</MapView>
            <FAB
                style={{mapstyle}}
                icon="plus" />
        </View>
    )
}
/*esta wea del FAB es un boton, pensaba que podriamos poner la lista de tiendas ahi, pero no funciona ni declarando manual, se ve un cubo verde xd */
/*En el espacio del return queria poner que mostrara las descripciones de las tiendas, pero no funciona, lo mismo si pongo el boton ahi, me sale jsx expressions must have one parent element */

export default MapScreen

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