import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, View, Button, Text } from 'react-native';
import { signIn } from '../../firebase/auth';

interface IError {
    code: string;
    message: string;
}

export const SignInComponents = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [correctData, setCorrectData] = useState(false);
    const [error, setError] = useState<IError | undefined>(undefined);

    const handlerSubmit = async () => {
        setLoading(true);
        const user = await signIn(email, password);
        if (user) {
            // TODO: guardar datos del usuario en el storage(context, reducer, redux, etc...)
            setLoading(false);
        } else {
            // TODO: manejar el error
            setLoading(false);
            setError({
                code: '404',
                message: 'no existe usuario',
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
                    title={loading ? 'Creando usuario...' : 'Registrarse'}
                    color="#29526D"
                    disabled={loading || correctData}
                />
            </View>
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
