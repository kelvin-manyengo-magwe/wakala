import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Splash = () => {

        return (
        <>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

                           <View style={styles.splashContainer}>
                                    <Text style={styles.splashText}>
                                            Wakala
                                    </Text>
                            </View>

        </>
        )
}


const styles= StyleSheet.create({
    splashContainer: {
        margin: 'auto'
    },
    linearGradient: {
        flex: 1,
    },
    splashText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black'
    }
});