import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
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
                {/*stores.map(stores => (
                    <Marker 
                    pinColor={'green'}
                    coordinate={{stores.latitude, stores.longitude}}
                    title={stores.title}
                    />
                ))*/}
			</MapView>
        </View>
    )
}

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