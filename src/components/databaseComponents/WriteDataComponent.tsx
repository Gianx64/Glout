import React from 'react';
import { Button } from 'react-native';
import { writeStoreData } from '../../firebase/database';

export const WriteDataComponent = (ubicacion:{latitude:number, longitude:number}) => { //owner:string, latitude:number, longitude:number, name:string, description:string, contact:string
    /*const store = {
        owner: owner,
        latitude: latitude,
        longitude: longitude,
        name: name,
        description: description,
        contact: contact
    }*/
    const store = {
        owner: 'owner',
        latitude: ubicacion.latitude ?? 'latitude',
        longitude: ubicacion.longitude ?? 'longitude',
        name: 'name',
        description: 'description',
        contact: 'contact'
    }

    const handlerSaveData = () => {
        writeStoreData(store)
    }

    return (
        <Button
            onPress={handlerSaveData}
            title="Guardar datos"
            color="#841584"
        />
    )
}
