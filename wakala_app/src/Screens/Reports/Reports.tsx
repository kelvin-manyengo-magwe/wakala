import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SummaryCard } from '../../components/Reports/SummaryCard/SummaryCard';
import { NetworkCards } from '../../components/Reports/NetworkCards/NetworkCards';
import { PeriodSelector } from '../../components/Reports/PeriodSelector/PeriodSelector';
import { styles } from './styles';
import { SalioCard } from '../../components/Reports/SalioCard/SalioCard';
import { DailyBarChart } from '../../components/Graphs/DailyBarChart/DailyBarChart';
import { MonthlyBarChart } from '../../components/Graphs/MonthlyBarChart/MonthlyBarChart';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';

export const Reports = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('halotel');
  const [selectedPeriod, setSelectedPeriod] = useState<'siku' | 'mwezi'>('siku');
  const [transactionCount, setTransactionCount] = useState(0);
  const [salio, setSalio] = useState('0 Tzs');
  const [commission, setCommission] = useState('0 Tzs');

  useEffect(() => {
    let realmInstance: Realm | null = null;
    let transactions: Realm.Results<TransactionsSchema> | null = null;

    const loadFinancialData = async () => {
      try {
        realmInstance = await getRealm();
        transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');

        const updateFinancialData = (collection: Realm.Results<TransactionsSchema>) => {
          // Calculate total float (salio)
          const totalFloat = collection.sum('float') || 0;
          setSalio(`${totalFloat.toLocaleString()} Tzs`);

          // Calculate total commission
          const totalCommission = collection.sum('commission') || 0;
          setCommission(`${totalCommission.toLocaleString()} Tzs`);

          // Get transaction count
          setTransactionCount(collection.length);
        };

        // Initial update
        updateFinancialData(transactions);

        // Set up listener for changes
        transactions.addListener((collection) => {
          updateFinancialData(collection);
        });

      } catch (error) {
        console.error('Error loading financial data:', error);
      }
    };

    loadFinancialData();

    return () => {
      if (realmInstance && !realmInstance.isClosed) {
        if (transactions) {
          transactions.removeAllListeners();
        }
        realmInstance.close();
      }
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
              <SalioCard title="Floti" balance={salio} />

              <SummaryCard title="kamisheni" value={commission} />

              <NetworkCards
                selectedNetwork={selectedNetwork}
                onSelect={setSelectedNetwork}
              />

              <PeriodSelector
                selectedPeriod={selectedPeriod}
                onSelectPeriod={setSelectedPeriod}
              />

              <View style={styles.chartContainer}>
                {selectedPeriod === 'siku' ?
                          <DailyBarChart transactionCount={transactionCount} />
                          : <MonthlyBarChart transactionCount={transactionCount} />}
              </View>

              <Text style={styles.sectionTitle}>Maendeleo ya blashara</Text>


    </ScrollView>
  );
};