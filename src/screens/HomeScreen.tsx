import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, StyleSheet, View, Image } from 'react-native'
import { ReadDataComponent } from '../components/databaseComponents/ReadDataComponent';


export const HomeScreen = () => {
	const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image
             source={require('../../assets/icon.png')}
             style={{ width: 200, height: 200 }}
            />
            {/* <WriteDataComponent />*/}
            <ReadDataComponent />
            <Button title={'Ir a perfil'} onPress={() => {navigation.navigate('User Screen')}} />
            <Button title={'Ir al mapa'} onPress={() => {navigation.navigate('Map Screen')}} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});