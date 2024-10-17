import React, { useState } from 'react';
import { Text, View, Stylesheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Splash = () => {

        return (
            <View style={styles.splashContainer}>
                    <Text style={[fontSize: 24, fontStyle: 'bold']}>
                         Splash Screen
                    </Text>
            </View>
        )
}


const styles= Stylesheet.create([
    splashContainer: {
        margin: auto
    }
]);