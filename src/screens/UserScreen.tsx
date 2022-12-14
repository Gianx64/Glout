import { StackActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { signOut } from '../firebase/auth'
import { auth } from '../firebase/firebaseConfig'

const UserScreen = () => {
	const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Correo electrónico: {auth.currentUser?.email}</Text>
            <Button title={'Sign Out'}
				onPress={() => {signOut();
					navigation.dispatch(StackActions.popToTop());
					navigation.dispatch({
						...StackActions.replace('SignIn Screen'),
						source: undefined,
						target: navigation.getState().key,
					  });
				}}
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