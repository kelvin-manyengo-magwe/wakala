import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const Home = () => {


    return (
            <>
                 <View style={styles.header}>
                          <View>
                                  <Text style={styles.wakalaFont}>Wakala</Text>
                          </View>

                          <View style={styles.iconContainer}>
                                   <TouchableOpacity style={styles.iconSpacing}>
                                            <Ionicons name="notifications-outline" size={20} />
                                   </TouchableOpacity>

                                   <TouchableOpacity style={styles.iconSpacing}>
                                            <Ionicons name="person-outline" size={20} />
                                   </TouchableOpacity>
                          </View>
                 </View>
            </>
    )
};



const styles = StyleSheet.create({
       header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            elevation: 4,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            margin: 5
       },
       iconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
       },
       iconSpacing: {
            marginHorizontal: 8
       },
       wakalaFont: {
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black'
       }
});