import { useNavigation, StackActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { signIn } from '../../firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import styles from '../../styles/Styles';

interface IError {
    code: string;
    message: string;
}

export const SignInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [correctData, setCorrectData] = useState(false);
    const [error, setError] = useState<IError | undefined>(undefined);

	const navigation = useNavigation();

    const handlerSubmit = async () => {
        setLoading(true);
        const successSignIn = await signIn(email, password);
        if (successSignIn === true) {
            setLoading(false);
        } else {
            if (successSignIn.toString() === 'FirebaseError: Firebase: Error (auth/wrong-password).')
            setError({
                code: '400',
                message: 'Contraseña incorrecta.',
            })
            else if (successSignIn.toString() === 'FirebaseError: Firebase: Error (auth/invalid-email).')
            setError({
                code: '400',
                message: 'Correo inválido.',
            })
            else if (successSignIn.toString() === 'FirebaseError: Firebase: Error (auth/network-request-failed).')
            setError({
                code: '400',
                message: 'Error de conexión.',
            })
            else if (successSignIn.toString() === 'FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).')
            setError({
                code: '400',
                message: 'El acceso a esta cuenta ha sido deshabilitada temporalmente debido a muchos intentos fallidos de ingreso. Por favor, intente más tarde.',
            })
            else setError({
                code: '400',
                message: successSignIn.toString(),
            })
            setLoading(false);
            alert(error?.message)
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
				navigation.dispatch({
					...StackActions.replace('Home Screen'),
					source: undefined,
					target: navigation.getState().key,
				  });
			}
		})
		return unsubscribe;
	}, [])


    return (
        <View style={styles.container}>
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
            <View style={styles.botonSigInComponent}>
                <Button
                    onPress={handlerSubmit}
                    title={loading ? 'Iniciando Sesión...' : 'Inicia Sesión'}
                    color="#29526D"
                    disabled={loading || correctData}
                />
            </View>
            <Button
				title={'Registrarse'}
				onPress={() => {navigation.dispatch(StackActions.push('SignUp Screen'))}}
			/>
        </View>
    )
}


