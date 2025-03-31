import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeWindStyleSheet } from 'nativeWind';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { styles } from './styles';


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
                                            Karibu wakala
                                    </Text>
                            </View>


                <View style={styles.getStartedButtonContainer}>
                          <Pressable style={({ pressed }) => [
                                styles.getStartedButton, {backgroundColor: pressed ? 'darkred' : 'red'}
                                ]} onPress={() => navigation.navigate('mainApp')}>
                                   <Text style={styles.getStartedButtonFont}>
                                        Anza Sasa ...
                                   </Text>
                          </Pressable>
                </View>
        </>
        )
}


