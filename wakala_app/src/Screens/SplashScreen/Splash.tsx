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
                        navigation.navigate('OnBoarding');
                    }, 3000);
                },[]);

        return (
        <>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                           <View style={styles.splashContainer}>
                                    {/*         the big bolded wakala word to be viewed incase
                                            <Text style={styles.splashWakala}>
                                                     Wakala
                                            </Text>
                                        */}

                                        <View>
                                                <Image style={styles.wakalaLogo} source={ require('../../../assets/images/icons/wakala-logo.jpg') } />
                                        </View>

                                            {/* Wakala word */}
                                        <View>
                                                <Image style={styles.wakalaWord} source={ require('../../../assets/images/icons/wakala-word.png') } />
                                        </View>

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
        alignItems: 'center',
        backgroundColor: '#ffffff',
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
    },
    wakalaWord: {
            marginBottom: 10,
        },
    wakalaLogo: {
            width: 100,
            height: 100,
            marginBottom: 20,
        }
});