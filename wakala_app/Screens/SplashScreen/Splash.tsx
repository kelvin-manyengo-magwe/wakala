import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Splash = () => {

        return (
            <View style={styles.splashContainer}>
                    <Text style={styles.splashText}>
                         Splash Screen
                    </Text>
            </View>
        )
}


const styles= StyleSheet.create({
    splashContainer: {
        margin: 'auto'
    },
    splashText: {
        fontSize: 24,
        fontStyle: 'bold'
    }
});