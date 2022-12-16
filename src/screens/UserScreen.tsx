import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { signOut } from '../firebase/auth'
import { auth } from '../firebase/firebaseConfig' 
import styles from '../styles/Styles';

interface IError {
    code: string;
    message: string;
}

const UserScreen = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<IError | undefined>(undefined);
	const navigation = useNavigation();

    const handlerSubmit = async () => {
        setLoading(true);
        const successSignOut = await signOut();
        if (successSignOut !== true) {
            console.log(successSignOut.toString());
            if (successSignOut.toString() === 'FirebaseError: Firebase: Error (auth/network-request-failed).')
            setError({
                code: '400',
                message: 'Error de conexión.',
            })
            else setError({
                code: '400',
                message: successSignOut.toString(),
            })
            setLoading(false);
            alert(error?.message)
        }
    }

    useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user === null) {
                setLoading(false);
                navigation.dispatch(StackActions.popToTop());
                navigation.dispatch({
                    ...StackActions.replace('SignIn Screen'),
                    source: undefined,
                    target: navigation.getState().key,
                  });
			}
		})
        return unsubscribe;
	}, [])
    
    return (
        <View style={styles.containerUserScreen}>
             <Image
                source={require('../../assets/usuario.png')}
                style={styles.img}
             />
            <Text style={styles.nombre}>Nombre: </Text>
            <Text style={styles.nombre}>Apellido: </Text>
            <Text style={styles.correo}>Correo electrónico: {auth.currentUser?.email}</Text>
            <Button title={loading ? 'Saliendo...' : 'Salir'}
				onPress={handlerSubmit}
                disabled={loading}
			/>
        </View>
    )
}

export default UserScreen