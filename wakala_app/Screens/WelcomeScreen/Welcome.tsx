import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeWindStyleSheet } from 'nativeWind';


export const Welcome = () => {

        return (
        <>
               <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                <View className="bg-blue-500" style={styles.splashContainer}>
                        <Text className="text-lg" style={styles.welcomeText}>
                                  Welcome Wakala,
                        </Text>
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
    }
});