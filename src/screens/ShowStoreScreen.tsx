import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { BlackButton, LikeButton, DislikeButton} from '../components/buttonComponents/buttons';


export const ShowStoreScreen = ({ navigator, route }:any) => {
    console.log(route.params);
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{fontSize: 40}}>Tienda: {route.params.store.name ?? 'No se sabe'}</Text>
                <Text style={{fontSize: 30}}>Capacidad de delivery: {route.params.store.delivery ? 'Si' : 'No'}</Text>
                <Text style={{fontSize: 30}}>Contacto: {route.params.store.contact ?? 'No se sabe'}</Text>
                <Text style={{fontSize: 30}}>Descripción: {route.params.store.description ?? 'No se sabe'}</Text>
                <Text style={{fontSize: 20}}>Likes: # / Dislikes: #</Text>
                <BlackButton onPress = {() => alert('Boton presionado')} text='Guardar'/>
                <LikeButton onPress = {() => alert('Boton presionado')} text='Me gusta' /> 
                <DislikeButton onPress = {() => alert('Boton presionado')} text='No me gusta' />
            </ScrollView>
        </View>
    )
}

export default ShowStoreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

});