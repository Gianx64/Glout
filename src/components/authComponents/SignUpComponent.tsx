import { StackActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, View, Button, Text } from 'react-native';
import { signUp } from '../../firebase/auth';
import { writeUserData } from '../../firebase/database';
import { auth } from '../../firebase/firebaseConfig';
import styles from '../../styles/Styles';


interface IError {
    code: string;
    message: string;
}

export const SignUpComponent = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [correctData, setCorrectData] = useState(false);
    const [error, setError] = useState<IError | undefined>(undefined);
	const navigation = useNavigation();

    const handlerSubmit = async () => {
        setLoading(true);
        const user = await signUp(email, password);
        if (user) {
            // TODO: guardar datos del usuario en el storage(context, reducer, redux, etc...)
            writeUserData(name, surname);
            setLoading(false);
        } else {
            // TODO: manejar el error
            setLoading(false);
            setError({
                code: '500',
                message: 'Error interno de servidor.',
            })
        }
    }

    useEffect(() => {
        if (email !== '' && password !== '') {
            setCorrectData(false);
        }
        else {
            setCorrectData(true)
        }
    }, [email, password])

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				navigation.dispatch(StackActions.popToTop());
				navigation.dispatch({
					...StackActions.replace('Home Screen'),
					source: undefined,
					target: navigation.getState().key,
				  });
			}
		})
		return unsubscribe;
	}, [])

    if (error) {
        return (
            <View>
                <Text>
                    {error.message}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Ingrese su nombre"
                onChangeText={setName}
                value={name}
                style={styles.input}
                keyboardType= 'default'
            />
            <TextInput
                placeholder="Ingrese su apellido"
                onChangeText={setSurname}
                value={surname}
                style={styles.input}
                keyboardType= 'default'
            />
            <TextInput
                placeholder="Ingrese Email"
                onChangeText={setEmail}
                value={email}
                style={styles.input}
                keyboardType='email-address'
            />
            <TextInput
                placeholder="Ingrese Password"
                onChangeText={setPassword}
                value={password}
                style={styles.input}
                secureTextEntry
            />
            <View style={styles.botonSigUpComponent}>
                <Button
                    onPress={handlerSubmit}
                    title={loading ? 'Creando usuario...' : 'Registrarse'}
                    color="#29526D"
                    disabled={loading || correctData}
                />
            </View>
        </View>
    )
}

