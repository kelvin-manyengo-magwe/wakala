import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Welcome = () => {

        return (
        <>
               <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                <View style={styles.splashContainer}>
                        <Text style={styles.welcomeText}>
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
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    }
});