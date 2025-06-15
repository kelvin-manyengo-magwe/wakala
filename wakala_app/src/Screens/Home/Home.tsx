import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { SlidingCard } from '../../components/SlidingCard/SlidingCard';
import { CardData } from '../../components/SlidingCard/CardData';
import { TotalSummary } from '../../components/TotalSummary/TotalSummary';
import { HomeCalculatorSummary } from '../../Services/Database/models/HomeCalculatorSummary';
import { DepositsWithdrawalBarChart } from '../../components/Graphs/DepositsWithdrawalBarChart/DepositsWithdrawalBarChart';
import { MnoServicePanel } from '../../components/MnoServicePanel/MnoServicePanel';
import { DepositsWithdrawalDataProvider } from '../../components/Graphs/DepositsWithdrawalBarChart/DepositsWithdrawalDataProvider/DepositsWithdrawalDataProvider';
import { SideDrawer } from '../../components/SideDrawer/SideDrawer';




export const Home = () => {


                const navigation = useNavigation<any>();


            const [airtelDeposits, setAirtelDeposits] = useState(0);
          const [airtelWithdrawals, setAirtelWithdrawals] = useState(0);
          const [halotelDeposits, setHalotelDeposits] = useState(0);
          const [halotelWithdrawals, setHalotelWithdrawals] = useState(0);

          const [isDrawerOpen, setIsDrawerOpen] = useState(false); //state for sideDrawer

          useEffect(() => {
            let realmInstance: Realm;

            const loadSummary = async () => {
              realmInstance = await getRealm();
              const transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');

              // Initial load
             const summary = await DepositsWithdrawalDataProvider();
                   setAirtelDeposits(summary.airtelDeposits);
                   setAirtelWithdrawals(summary.airtelWithdrawals);
                   setHalotelDeposits(summary.halotelDeposits);
                   setHalotelWithdrawals(summary.halotelWithdrawals);

                    console.log('📊 Initial Summary:', summary);

              // Set up listener
              transactions.addListener(async () => {
                console.log('Realm Change detected 🚀');

                            //loading total data from deposits_withdrawal data provider component
                const updatedSummary = await DepositsWithdrawalDataProvider();

                        setAirtelDeposits(updatedSummary.airtelDeposits);
                        setAirtelWithdrawals(updatedSummary.airtelWithdrawals);
                        setHalotelDeposits(updatedSummary.halotelDeposits);
                        setHalotelWithdrawals(updatedSummary.halotelWithdrawals);

                         console.log('🔁 Updated Summary:', updatedSummary)
              });
            };

            loadSummary();

            // Cleanup listener
            return () => {
              if (realmInstance && !realmInstance.isClosed) {
                const transactions = realmInstance.objects('deposits_transaction');
                transactions.removeAllListeners();
                realmInstance.close();
              }
            };
          }, []);


                const toggleDrawer = () => {
                        setIsDrawerOpen(!isDrawerOpen);
                    };


                        const navigateToNotifications = () => {
                                // Ensure 'NotificationsScreen' is the correct name in your navigator
                                navigation.navigate('Notifications');
                            };


    return (
        <View style={{ flex: 1 }}>

                    <ScrollView>
                                <View style={styles.whiteBackground}>
                                         <View style={styles.header}>
                                                  <View>
                                                          <Text style={styles.wakalaFont}>Wakala</Text>
                                                  </View>

                                                  <View style={styles.iconContainer}>
                                                           <TouchableOpacity style={styles.iconSpacing} onPress={navigateToNotifications}>
                                                                    <Ionicons name="notifications-outline" size={20} />
                                                           </TouchableOpacity>

                                                           <TouchableOpacity style={styles.iconSpacing} onPress={toggleDrawer}>
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

                                                     <View style={styles.mnoServicePanel}>
                                                           {/* <MnoServicePanel /> */}
                                                     </View>

                                                     <View style={styles.depositsWithdrawal}>
                                                              <DepositsWithdrawalBarChart
                                                                            airtelDeposits={airtelDeposits}
                                                                            airtelWithdrawals={airtelWithdrawals}
                                                                            halotelDeposits={halotelDeposits}
                                                                            halotelWithdrawals={halotelWithdrawals}
                                                                          />
                                                     </View>
                                         </View>
                                </View>
                    </ScrollView>


                        <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </View>
    )
};



