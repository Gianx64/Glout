import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d6f9f8',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    //Home
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

    //Signs
    botonSigInComponent: {
        marginTop: 110,
        marginBottom: 84,
        width: '50%',
    },

    botonSigUpComponent: {
        marginTop: 110,
        marginBottom: 84,
        width: '50%',
    },

    input: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 40,
        width: '90%',
        borderRadius: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
    },

    //Buttons
    button: {
        width:'80%',
        paddingVertical: 10,
        marginVertical: 15,
        textAlign:'center',
        alignSelf:'center',
        borderRadius: 20,
    },

    buttonText:{
        textAlign:'center',
    },

    bDer:{
        paddingVertical: 10,
        marginVertical:10,
        textAlign:'center',
        borderRadius: 30,
        right: 70,
    },

    bIzq:{
        paddingVertical: 10,
        marginVertical:10,
        textAlign:'center',
        borderRadius: 30,
        left: 70,
        top: -59,
    },

    //MapScreen
    flex: {
        flex: 1
    },
    fab: {
        position: "absolute",
        right: 50,
        bottom: 50,
        margin: 20
    },
    //fab
    buttonCallout: {
        flex: 1,
        flexDirection:'row',
        position:'absolute',
        bottom:10,
        alignSelf: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        borderWidth: 0.5,
        borderRadius: 100
    },
    touchable: {
        backgroundColor: "lightblue",
        padding: 10,
        margin: 10
    },
    touchableText: {
        fontSize: 16
    },

    //ShowStore
    containerShowScreen: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#d6f9f8",
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
    },

    //SignInScreen
    imageSignIn: {
                 backgroundColor: "#d6f9f8",
                 flex: 2,
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
             },
    containerSignIn: {
                backgroundColor: '#d6f9f8',
                flex: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                paddingVertical: 200,
            },

    //SignUpScreen
    imageSignUp: {
        backgroundColor: "#d6f9f8",
        flex: 0.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //UserScreen
    containerUserScreen: {
         backgroundColor: "#d6f9f8",
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         padding: 15,
    },
    nombre:{
        marginVertical:10,
        fontSize: 17,
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        top: -150,
    },
    correo:{
        marginVertical:10,
        fontSize: 17,
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        top: -150,
    },
    img:{
        width: 150, 
        height: 150,
        paddingVertical: 10,
        marginVertical:10,
        textAlign:'center',
        borderRadius: 30,
        top: -150,
    },

    //MapComponent
    map: {
        width: '100%',
        height: '100%',
    },

   
});

export default styles