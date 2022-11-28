import React from 'react';
import { Button } from 'react-native';
import { readUserData } from '../../firebase/database';

export const ReadDataComponent = () => {
    const handlerReadData = () => {
        readUserData()
    }

    return (
        <Button
            onPress={handlerReadData}
            title="Leer datos"
            color="#841584"
        />
    )
}
