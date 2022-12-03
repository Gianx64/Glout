import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { writeStoreData } from '../firebase/database';
import { auth } from '../firebase/firebaseConfig';
import CheckBox from 'expo-checkbox';

export const SaveStoreScreen = ({ navigation, route }:any) => {
    const [contact, onChangeContact] = useState("");
    const [delivery, onChangeDelivery] = useState(false);
    const [description, onChangeDescription] = useState("");
    const [name, onChangeName] = useState("");

    const store = {
        contact: contact,
        delivery: delivery,
        description: description,
        latitude: route.params.ubicacion.latitude,
        likes: 0,
        longitude: route.params.ubicacion.longitude,
        name: name,
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
                onChangeText={onChangeContact}
                value={contact}
                placeholder="Contacto (FB, IG, Teléfono)."
            />
            <CheckBox
                disabled={false}
                value={delivery}
                onValueChange={() => onChangeDelivery(!delivery)}
            />
            <Text>¿Tiene delivery?</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeDescription}
                value={description}
                placeholder="¿Qué ofrece? (Información adicional)"
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    input: {
        margin: 12,
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
});