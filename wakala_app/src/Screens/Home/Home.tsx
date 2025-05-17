import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { SlidingCard } from '../../components/SlidingCard/SlidingCard';
import { CardData } from '../../components/SlidingCard/CardData';
import { TotalSummary } from '../../components/TotalSummary/TotalSummary';
import { HomeCalculatorSummary } from '../../Services/Database/models/HomeCalculatorSummary';
import { DepositsWithdrawalBarChart } from '../../components/Graphs/DepositsWithdrawalBarChart/DepositsWithdrawalBarChart';
import { MnoServicePanel } from '../../components/MnoServicePanel/MnoServicePanel';


export const Home = () => {

        const [totalDeposits, setTotalDeposits] = useState(0);
          const [totalWithdrawals, setTotalWithdrawals] = useState(0);

          useEffect(() => {
            let realmInstance: Realm;

            const loadSummary = async () => {
              realmInstance = await getRealm();
              const transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');

              // Initial load
              const summary = await HomeCalculatorSummary();
              setTotalDeposits(summary.totalDeposits);
              setTotalWithdrawals(summary.totalWithdrawals);

              // Set up listener
              transactions.addListener(async () => {
                console.log('Realm Change detected 🚀');
                const updatedSummary = await HomeCalculatorSummary();
                setTotalDeposits(updatedSummary.totalDeposits);
                setTotalWithdrawals(updatedSummary.totalWithdrawals);
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


    return (
        <ScrollView>
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

                                         <View style={styles.mnoServicePanel}>
                                                <MnoServicePanel />
                                         </View>

                                         <View style={styles.depositsWithdrawal}>
                                                  <DepositsWithdrawalBarChart
                                                               totalDeposits={totalDeposits}
                                                               totalWithdrawals={totalWithdrawals} />
                                         </View>
                             </View>
                    </View>
        </ScrollView>
    )
};



