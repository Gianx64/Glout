import { useNavigation, StackActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { signIn } from '../../firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

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
        if (successSignIn) {
            setLoading(false);
        } else {
            setLoading(false);
            setError({
                code: '404',
                message: 'No existe usuario.',
            })
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
            <View style={{ marginTop: 50, width: '50%' }}>
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 40,
        width: '90%',
        borderRadius: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
});
