import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { AppStackParamList } from '../../navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';


type MessageScreenProp = StackNavigationProp<AppStackParamList, 'MessageScreen'>;

interface MessageScreenProps {
    navigation: MessageScreen
}


export const MessageScreen = ({ navigation }: MessageScreenProps) => {

            useEffect(()=>{
                setTimeout(()=>{
                        navigation.navigate('Welcome');
                    }, 3000)
            },[]);

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