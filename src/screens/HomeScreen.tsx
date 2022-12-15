import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, StyleSheet, View, Image, Text } from 'react-native'
import { ReadDataComponent } from '../components/databaseComponents/ReadDataComponent';
import styles from '../styles/Styles';


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
             <Button title={'Ir a perfil'} onPress={() => {navigation.dispatch(StackActions.push('User Screen'))}} />
             <Button title={'Ir al mapa'} onPress={() => {navigation.dispatch(StackActions.push('Map Screen'))}} />
         </View>

         <View style={styles.text}>
            <Text>Tu Aplicación celíaca favorita </Text>  

         </View>
     </>
    )
}

export default HomeScreen
