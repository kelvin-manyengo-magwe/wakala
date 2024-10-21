import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Welcome = () => {

        return (
            <View style={styles.splashContainer}>
                    <Text style={styles.welcomeText}>
                            Welcome Page
                    </Text>
            </View>
        )
}


const styles= StyleSheet.create({
    welcomeContainer: {
        margin: 'auto'
    },
    welcomeText: {
        fontSize: 24,
        fontStyle: 'bold'
    }
});