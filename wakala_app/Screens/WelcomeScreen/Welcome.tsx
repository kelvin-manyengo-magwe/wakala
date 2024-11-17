import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeWindStyleSheet } from 'nativeWind';
import Fontisto from 'react-native-vector-icons/Fontisto';


export const Welcome = () => {

        return (
        <>
               <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                <View style={styles.splashContainer}>
                            <View className="mt-2 pl-4 flex flex-row items-center space-x-6 justify-start">
                                    <View style={styles.circle}>
                                            <Fontisto style={styles.person} name="person" color="black" size={50} />
                                            <View style={styles.greenDot}></View>
                                    </View>

                                    <Text className="text-2xl" style={styles.welcomeText}>
                                            Welcome{"\n"}Wakala
                                    </Text>
                            </View>
                </View>
        </>
        )
}


const styles= StyleSheet.create({
    welcomeContainer: {
        margin: 'auto'
    },
    welcomeText: {
        fontWeight: 'bold',
        color: 'black'
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
    }
});