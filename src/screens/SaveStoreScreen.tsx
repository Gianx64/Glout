import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { writeStoreData } from '../firebase/database';
import { auth } from '../firebase/firebaseConfig';
import CheckBox from 'expo-checkbox';
import styles from '../styles/Styles';


export const SaveStoreScreen = ({ navigation, route }:any) => {
    const [address, onChangeAddress] = useState('');
    const [contact, onChangeContact] = useState('');
    const [delivery, onChangeDelivery] = useState('');
    const [description, onChangeDescription] = useState('');
    const [name, onChangeName] = useState('');
    const [schedule, onChangeSchedule] = useState('');
    const [social, onChangeSocial] = useState('');
    const [webpage, onChangeWebpage] = useState('');

    const store = {
        name: name,
        description: description,
        delivery: delivery,
        address: address,
        schedule: schedule,
        social: social,
        contact: contact,
        webpage: webpage,
        coords: {
            latitude: route.params.ubicacion.latitude,
            longitude: route.params.ubicacion.longitude,
        },
        likes: 0,
        dislikes: 0,
        submitter: auth.currentUser?.email ?? 'anonymous'
    }

    const handlerSaveData = () => {
        writeStoreData(store)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Nombre de la tienda."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeDescription}
                value={description}
                placeholder="¿Qué ofrece? (Información adicional)"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeDelivery}
                value={delivery}
                placeholder="¿Tiene delivery?"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeAddress}
                value={address}
                placeholder="Dirección."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeSchedule}
                value={schedule}
                placeholder="Horarios de atención."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeSocial}
                value={social}
                placeholder="Redes sociales (FB: IG: Twitter: ...)."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeContact}
                value={contact}
                placeholder="Contacto (Teléfono, correo)."
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeWebpage}
                value={webpage}
                placeholder="Sitio web."
            />
            <Button
                onPress={() => {
                    handlerSaveData();
                    console.log('Tienda guardada: '+store);
                    navigation.navigate('Map Screen');
                }}
                title="Guardar datos"
                color="#841584"
            />
        </View>
    )
}

export default SaveStoreScreen

