import React, { useEffect, useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import { logIn } from '../../firebase/auth';

export const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [correctData, setCorrectData] = useState(false);

    const handlerSubmit = async () => {
        setLoading(true);
        const successRegister = await logIn(email, password);
        if (successRegister) {
            setLoading(false);
        } else {
            setLoading(false);
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
            title={loading ? 'Iniciando Sesion...' : 'Inicia Sesion'}
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
