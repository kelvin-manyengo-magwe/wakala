import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppStackParamList } from '../../navigation/routes';
import { StackNavigationProp } from '@react-navigation/stack';





type SplashScreenProp = StackNavigationProp<AppStackParamList, 'Splash'>;

interface SplashScreenProps {
    navigation: SplashScreenProp
};

export const Splash = ({navigation}: SplashScreenProps) => {

                useEffect(() => {
                    setTimeout(() => {
                        navigation.navigate('MessageScreen');
                    }, 3000);
                },[]);

        return (
        <>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                           <View style={styles.splashContainer}>
                                    <Text style={styles.splashWakala}>
                                            Wakala
                                    </Text>
                                    <Text style={styles.splashMessage}>
                                           Fuatilia miamala yako kwa urahisi
                                    </Text>
                            </View>

        </>
        )
}


const styles= StyleSheet.create({
    splashContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    linearGradient: {
        flex: 1,
    },
    splashWakala: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black'
    },
    splashMessage: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
});