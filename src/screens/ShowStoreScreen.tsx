import React from 'react'
import { ScrollViewComponent, StyleSheet, Text, View, Button, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


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
                <Text> </Text>
                <Button title="Guardar" onPress={() => Alert.alert('boton guardar')}/>
                <Text> </Text>
                <Button title="Like" onPress={() => Alert.alert('boton like apretado')}/>
                <Text> </Text>
                <Button title="Dislike" onPress={() => Alert.alert('boton dislike')}/>
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
    }
});