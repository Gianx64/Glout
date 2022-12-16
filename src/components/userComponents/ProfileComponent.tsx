import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { signOut } from '../../firebase/auth'
import { auth } from '../../firebase/firebaseConfig' 
import styles from '../../styles/Styles';
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

interface IError {
    code: string;
    message: string;
}

export const ProfileComponent = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [signingOut, setSigningOut] = useState(false);
    const [error, setError] = useState<IError | undefined>(undefined);
	const navigation = useNavigation();

    const handlerSubmit = async () => {
        setSigningOut(true);
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
            setSigningOut(false);
            alert(error?.message)
        }
    }

	async function getUserData() {
        onValue(ref(database, "user/"+auth.currentUser?.uid), (snapshot) => setUserData(snapshot.val()));
        setLoading(false);
    }

    useEffect(() => {
        getUserData()
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user === null) {
                setSigningOut(false);
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

    if (loading) {
        return (
            <View style={styles.containerUserScreen}>
                <Text>Cargando...</Text>
                <Button title={signingOut ? 'Cerrando Sesión...' : 'Cerrar Sesión'}
                    onPress={handlerSubmit}
                    disabled={loading}
                />
            </View>
        )
    }

    return (
        <View style={styles.containerUserScreen}>
            <Image
               source={require('../../../assets/usuario.png')}
               style={styles.img}
            />
            <Text style={styles.nombre}>Nombre: {userData.name}</Text>
            <Text style={styles.nombre}>Apellido: {userData.surname}</Text>
            <Text style={styles.nombre}>Correo electrónico: {auth.currentUser?.email}</Text>
            <Text style={styles.nombre}>Me Gusta: {userData.likes}</Text>
            <Text style={styles.nombre}>No Me Gusta: {userData.dislikes}</Text>
            <Text style={styles.nombre}>Guardados: {userData.saved}</Text>
            <Button title={signingOut ? 'Cerrando Sesión...' : 'Cerrar Sesión'}
                onPress={handlerSubmit}
                disabled={loading}
            />
        </View>
    )
}