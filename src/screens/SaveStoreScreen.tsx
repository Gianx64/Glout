import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { writeStoreData } from '../firebase/database';
import { auth } from '../firebase/firebaseConfig';

export const SaveStoreScreen = ({ navigation, route }:any) => {
    const [name, onChangeName] = useState("");
    const [description, onChangeDescription] = useState("");
    const [contact, onChangeContact] = useState("");

    useEffect(() => {
        //console.log(route.params);
    }, []);

    const store = {
        contact: contact,
        description: description,
        latitude: route.params.ubicacion.latitude,
        longitude: route.params.ubicacion.longitude,
        name: name,
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
            <TextInput
                style={styles.input}
                onChangeText={onChangeDescription}
                value={description}
                placeholder="Descripción de la tienda."
            />
            <Button
                onPress={handlerSaveData}
                title="Guardar datos"
                color="#841584"
            />
        </View>
    )
}


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