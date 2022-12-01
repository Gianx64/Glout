import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { writeStoreData } from '../firebase/database';

export const SaveStoreScreen = (ubicacion:{latitude:number, longitude:number}) => {
    const [name, onChangeName] = useState("");
    const [description, onChangeDescription] = useState("");
    const [contact, onChangeContact] = useState("");

    const store = {
        owner: 'owner',
        latitude: ubicacion.latitude,
        longitude: ubicacion.longitude,
        name: name,
        description: description,
        contact: contact
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
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});