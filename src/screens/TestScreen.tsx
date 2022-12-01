import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ReadDataComponent } from '../components/databaseComponents/ReadDataComponent';
import { WriteDataComponent } from '../components/databaseComponents/WriteDataComponent';

export const TestScreen = () => {
    return (
        <View style={styles.container}>
            {/* <WriteDataComponent />*/}
            <ReadDataComponent />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});