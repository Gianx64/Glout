import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { signOut } from '../firebase/auth'
import { auth } from '../firebase/firebaseConfig' 


const UserScreen = () => {
    const [loading, setLoading] = useState(false);
	const navigation = useNavigation();
    const handlerSubmit = async () => {
        setLoading(true);
        const successSignIn = signOut();
        setLoading(false);
    
    }
    useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
			// IMPLEMENTAR NAVEGACION	
			}
		})
        return unsubscribe;
	}, [])
    
    return (
        <View style={styles.container}>
            <Text>Nombre: </Text>
            <Text>Apellido: </Text>
            <Text>Correo electrónico: {auth.currentUser?.email}</Text>
            <Button title={loading ?'Saliendo...': 'Salir'}
				onPress={handlerSubmit
				}
			/>
        </View>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#0782F9',
        width: '75%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 10
    }
})