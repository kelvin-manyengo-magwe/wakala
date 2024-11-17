import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeWindStyleSheet } from 'nativeWind';


export const Welcome = () => {

        return (
        <>
               <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                <View style={styles.splashContainer}>
                            <View className="mt-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                                    <View style={styles.circle}>
                                            <View style={styles.greenDot}></View>
                                    </View>

                                    <Text className="text-2xl" style={styles.welcomeText}>
                                            Welcome Wakala,
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
    }
});