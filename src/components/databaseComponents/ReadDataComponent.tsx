import React from 'react';
import { Button } from 'react-native';
import { readDataBase } from '../../firebase/database';

export const ReadDataComponent = () => {
    const handlerReadData = () => {
        readDataBase()
    }

    return (
        <Button
            onPress={handlerReadData}
            title="Leer datos"
            color="#841584"
        />
    )
}