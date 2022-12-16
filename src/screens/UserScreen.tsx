import React from 'react'
import { View } from 'react-native'
import { ProfileComponent } from '../components/userComponents/ProfileComponent';
import styles from '../styles/Styles';

const UserScreen = () => {
    return (
        <View style={styles.containerUserScreen}>
            <ProfileComponent />
        </View>
    )
}

export default UserScreen