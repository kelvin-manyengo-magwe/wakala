import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { AppStackParamList } from '../../navigation/routes';




export const MessageScreen = () => {

        return (
            <>
                    <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                    <View style={styles.messageContainer}>
                            <Text style={styles.mafanikioWords}>
                                    Mafanikio ya wakala yanaanza hapa
                            </Text>
                    </View>
            </>
        )
}

const styles= StyleSheet.create({
        mafanikioWords: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center'
        },
        messageContainer: {
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3
        }
})