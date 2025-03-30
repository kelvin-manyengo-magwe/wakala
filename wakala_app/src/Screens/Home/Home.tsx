import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { SlidingCard } from '../../components/SlidingCard/SlidingCard';
import { CardData } from '../../components/SlidingCard/CardData';
import { TotalSummary } from '../../components/TotalSummary/TotalSummary';
import { DepositsWithdrawalBarChart } from '../../components/Graphs/DepositsWithdrawalBarChart/DepositsWithdrawalBarChart';



export const Home = () => {


    return (

            <View style={styles.whiteBackground}>
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

                     <View style={styles.greetingContainer}>
                            <Text>Habari za jioni, Magwe</Text>
                     </View>





                     <View style={styles.contentContainers}>
                                <View style={styles.slidingCardWrapper}>
                                        <SlidingCard cardData={CardData} />
                                </View>

                                 <View style={styles.summaryParentContainer}>
                                        <TotalSummary />
                                 </View>

                                 <View>
                                         <DepositsWithdrawalBarChart />
                                 </View>
                     </View>
            </View>

    )
};



