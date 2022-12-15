import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, StyleSheet, View, Image, Text } from 'react-native'
import { ReadDataComponent } from '../components/databaseComponents/ReadDataComponent';


export const HomeScreen = () => {
	const navigation = useNavigation();
    return (
    <>
         <View style={styles.container}>
             <Image
                source={require('../../assets/icon.png')}
                style={{ width: 250, height: 250 }}
             />
         </View>

         <View style={styles.data}>
             {/* <WriteDataComponent />*/}
             <ReadDataComponent />
             <Button title={'Ir a perfil'} onPress={() => {navigation.navigate('User Screen')}} />
             <Button title={'Ir al mapa'} onPress={() => {navigation.navigate('Map Screen')}} />
         </View>

         <View style={styles.text}>
            <Text>Tu Aplicación celíaca favorita </Text>  

         </View>
     </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d6f9f8',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    data: {
        backgroundColor: '#d6f9f8',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    text: {
        backgroundColor: '#d6f9f8',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
