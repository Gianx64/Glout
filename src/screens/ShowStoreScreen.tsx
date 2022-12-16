import React, { useState } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { BlackButton, LikeButton, DislikeButton } from '../components/buttonComponents/buttons';
import { writeUserDisiked, writeUserLiked, writeUserSaved, likedStore, dislikedStore } from '../firebase/database';
import styles from '../styles/Styles';

type store = {
  id: number;
  name_sucursal: string,
  address: string,
  contact: string,
  coords: {latitude: number, longitude: number}
  | {latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number},
  delivery: string,
  description: string,
  submitter: string,
  webpage: string,
  schedule: string,
  social: string,
  likes: number,
  dislikes: number
}

export const ShowStoreScreen = ({ navigator, route }:any) => {
    const [likes, setLikes] = useState(route.params.store.likes);
    const [dislikes, setDisikes] = useState(route.params.store.dislikes);

    const handlerLike = (store:store) => {
        writeUserLiked(store.name_sucursal)
        likedStore(store);
        setLikes(likes + 1);
    }

    const handlerDislike = (store:store) => {
        writeUserDisiked(store.name_sucursal)
        dislikedStore(store);
        setDisikes(dislikes + 1);
    }

    const handlerSave = (store:store) => {
        writeUserSaved(store.name_sucursal)
    }

    return (
        <SafeAreaView style={styles.containerShowScreen}>
            <ScrollView>
                <Text style={{...styles.titulo}}>{route.params.store.name_sucursal ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Descripción: {route.params.store.description ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Capacidad y Detalles de Delivery si aplica: {route.params.store.delivery ?? 'No aplica'}</Text>
                <Text style={{...styles.content}}>Dirección: {route.params.store.direccion ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Horario: {route.params.store.horario ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Redes sociales: {route.params.store.social ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Contacto: {route.params.store.contact ?? 'No se sabe'}</Text>
                <Text style={{...styles.content}}>Página Web: {route.params.store.webpage ?? 'No se sabe'}</Text>
            </ScrollView>
            <View style={{...styles.bottom}}>
                <Text style={{...styles.coment}}>Likes: {likes} / Dislikes: {dislikes}</Text>
                <BlackButton onPress = {() => handlerSave(route.params.store)} text='Guardar' />
                <LikeButton onPress = {() => handlerLike(route.params.store)} text='Me gusta' /> 
                <DislikeButton onPress = {() => handlerDislike(route.params.store)} text='No me gusta' />
            </View>
        </SafeAreaView>
    )
}

export default ShowStoreScreen