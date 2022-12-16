import React from 'react'
import { StackActions, useNavigation } from '@react-navigation/native';
import { Button, View, Image, Text } from 'react-native'
import styles from '../styles/Styles';

export const HomeScreen = () => {
	const navigation = useNavigation();
    return (
    <>
        <View style={styles.image}>
            <Image
               source={require('../../assets/icon.png')}
               style={{ width: 250, height: 250 }}
            />
        </View>
        <View style={styles.data}>
            <Text style={styles.text}>Bienvenid@ a Glout</Text>
            <View style={styles.submitButton}>
                <Button title={'Ir al mapa'} onPress={() => {navigation.dispatch(StackActions.push('Map Screen'))}} />
            </View>
            <View style={styles.submitButton}>
                <Button title={'Ir a perfil'} onPress={() => {navigation.dispatch(StackActions.push('User Screen'))}} />
            </View>
            <Text style={styles.text}>Tu Aplicación celíaca favorita </Text>
        </View>
     </>
    )
}

export default HomeScreen