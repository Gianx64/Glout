import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView, { Callout, Marker } from 'react-native-maps';
import { Text } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import styles from '../../styles/Styles';
import { readStoresData } from '../../firebase/database';
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

type store = {
    name_sucursal: string,
    address: string,
    contact: string,
    coords: {latitude: number, longitude: number} |
    {latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number},
    delivery: string,
    description: string,
    submitter: string,
    webpage: string,
    schedule: string,
    social: string,
    likes: number,
    dislikes: number
}

export const MapComponent = () => {
    const [ubicacion, setUbicacion] = useState({
        latitude: -33.44,
        longitude: -70.65,
    });
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);

	const navigation = useNavigation();

	useEffect(() => {
        getLocationPermission();
        setLoading(true);
	}, [])

	async function getLocationPermission() {
        onValue(ref(database, "stores"), (snapshot) => setStores(snapshot.val()));
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
        setLoading(false);
	}

    if (loading) {
        return (
            <Text>Cargando...</Text>
        )
    }

    return (
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
                <Callout onPress= {() => {navigation.dispatch(StackActions.push('SaveStoreScreen', { ubicacion }))}}>
                    <Text>Ingresar tienda</Text>
                </Callout>
            </Marker>
            {stores.map((store:store) => {
                return (
                    <Marker
                        pinColor='blue'
                        coordinate={store.coords}
                    >
                        <Callout onPress= {() => {navigation.dispatch(StackActions.push('ShowStoreScreen', { store }))}}>
                            <Text>Tienda: {store.name_sucursal}</Text>
                        </Callout>
                    </Marker>
                ) 
            })}
		</MapView>
    )
}