import React, { useState } from 'react';
import { Text, View, Stylesheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const Welcome = () => {

        return (
            <View style={styles.splashContainer}>
                    <Text style={[fontSize: 24, fontStyle: 'bold']}>
                            Welcome Page
                    </Text>
            </View>
        )
}


const styles= Stylesheet.create([
    splashContainer: {
        margin: auto
    }
]);