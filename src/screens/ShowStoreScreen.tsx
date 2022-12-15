import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import { ScrollView} from 'react-native-gesture-handler';
import { BlackButton, LikeButton, DislikeButton} from '../components/buttonComponents/buttons';
import { writeUserDisiked, writeUserLiked, writeUserSaved } from '../firebase/database';


export const ShowStoreScreen = ({ navigator, route }:any) => {
    //console.log(route.params);
    
    //TODO: evitar que se inicie un ciclo infinito
    const handlerLike = (store:string) => {
        writeUserLiked(store)
    }
    //TODO: evitar que se inicie un ciclo infinito
    const handlerDislike = (store:string) => {
        writeUserDisiked(store)
    }
    //TODO: evitar que se inicie un ciclo infinito
    const handlerSave = (store:string) => {
        writeUserSaved(store)
    }

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
                <BlackButton onPress = {() => handlerSave(route.params.store.name_sucursal)} text='Guardar'/>
                <LikeButton onPress = {() => handlerLike(route.params.store.name_sucursal)} text='Me gusta' /> 
                <DislikeButton onPress = {() => handlerDislike(route.params.store.name_sucursal)} text='No me gusta' />
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