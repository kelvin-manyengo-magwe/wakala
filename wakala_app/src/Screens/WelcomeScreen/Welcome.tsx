import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeWindStyleSheet } from 'nativeWind';
import Fontisto from 'react-native-vector-icons/Fontisto';


export const Welcome = ({ navigation }) => {

        return (
        <>
               <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />


                            <View style={styles.welcomeContainer}>
                                    {/*<View style={styles.circle}>
                                            <Fontisto style={styles.person} name="person" color="black" size={50} />
                                            <View style={styles.greenDot}></View>
                                    </View> The cicle with green dot (online) and showing person at center*/}

                                    <Text className="text-2xl" style={styles.welcomeText}>
                                            Karibu Wakala
                                    </Text>
                            </View>


                <View style={styles.getStartedButtonContainer}>
                          <Pressable style={({ pressed }) => [
                                styles.getStartedButton, {backgroundColor: pressed ? 'darkred' : 'red'}
                                ]}
                                onPress={() => navigation.navigate('Home')}>
                                   <Text style={styles.getStartedButtonFont}>
                                        Get Started ...
                                   </Text>
                          </Pressable>
                </View>
        </>
        )
}


const styles= StyleSheet.create({
    welcomeContainer: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30
    },
    circle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: '#3498db',
        position: 'relative'
    },
    greenDot: {
        borderColor: 'green',
        backgroundColor: 'green',
        width: 12,
        height: 12,
        borderRadius: 6,
        position: 'absolute',
        top: 4,
        left: 5
    },
    person: {
        position: 'absolute',
        top: 6,
        left: 16
    },
    getStartedButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15
    },
    getStartedButtonFont: {
       fontWeight: 'bold',
       fontSize: 18,
       color: 'white'
    },
    getStartedButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20
    }
});