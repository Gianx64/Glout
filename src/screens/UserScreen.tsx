import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
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
			if (user === null) {
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
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
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
    },
    nombre:{
        marginVertical:10,
        fontSize: 17,
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        top: -150,
    },
    correo:{
        marginVertical:10,
        fontSize: 17,
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        top: -150,
    },
    img:{
        width: 150, 
        height: 150,
        paddingVertical: 10,
        marginVertical:10,
        textAlign:'center',
        borderRadius: 30,
        top: -150,
    },
})