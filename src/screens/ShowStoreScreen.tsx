import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { ScrollView} from 'react-native-gesture-handler';
import { BlackButton, LikeButton, DislikeButton} from '../components/buttonComponents/buttons';


export const ShowStoreScreen = ({ navigator, route }:any) => {
    console.log(route.params);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={{...styles.titulo}}>{route.params.store.name_sucursal ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Capacidad de delivery: {route.params.store.delivery ? 'Si' : 'No'}</Text>
                <Text style={{...styles.content}}>Contacto: {route.params.store.contact ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Descripción: {route.params.store.description ?? 'No se sabe'}</Text>
            </ScrollView>
            <View style={{...styles.bottom}}>
                <Text style={{...styles.coment}}>Likes: # / Dislikes: #</Text>
                <BlackButton onPress = {() => alert('Boton presionado')} text='Guardar'/>
                <LikeButton onPress = {() => alert('Boton presionado')} text='Me gusta' /> 
                <DislikeButton onPress = {() => alert('Boton presionado')} text='No me gusta' />
            </View>
        </SafeAreaView>
    )
}

export default ShowStoreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
        width: '100%',
    },
    titulo:{
        fontSize: 40,
        justifyContent: 'center',
        width: '100%',
        padding: 10,

    },
    content:{
        fontSize: 20,
        justifyContent: 'center',
        width: '100%',
        padding: 10,

    },
    coment:{
        fontSize: 15,
        justifyContent: 'center',
        width: '100%',
        padding: 10,

    },
    bottom:{

        justifyContent: 'flex-end',
        alignItems: 'center',	
    }

});