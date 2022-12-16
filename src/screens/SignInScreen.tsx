import React from 'react'
import { StatusBar, View, Image } from 'react-native';
import { SignInComponent } from '../components/authComponents/SignInComponent';
import styles from '../styles/Styles';

export const SignInScreen = () => {
    return (
    <>
         <View style={styles.image}>
             <Image
                source={require('../../assets/icon.png')}
                style={{ width: 185, height: 185 }}
             />
         </View>  
        <View style={styles.containerSignIn}>
            <StatusBar />
            <SignInComponent />
        </View>
    </>
    )
}

export default SignInScreen