import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SummaryCard } from '../../components/Reports/SummaryCard/SummaryCard';
import { NetworkCards } from '../../components/Reports/NetworkCards/NetworkCards';
import { PeriodSelector } from '../../components/Reports/PeriodSelector/PeriodSelector';
import { styles } from './styles';
import { SalioCard } from '../../components/Reports/SalioCard/SalioCard';
import { DailyBarChart } from '../../components/Graphs/DailyBarChart/DailyBarChart';
import { MonthlyBarChart } from '../../components/Graphs/MonthlyBarChart/MonthlyBarChart';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { HomeCalculatorSummary } from '../../Services/Database/models/HomeCalculatorSummary';

export const Reports = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('halotel');
  const [selectedPeriod, setSelectedPeriod] = useState<'siku' | 'mwezi'>('siku');
  const [transactionCount, setTransactionCount] = useState(0);
  const [salio, setSalio] = useState('0 Tzs');

  // ✅ Fixed: Initialize with an object using {}
  const [commission, setCommission] = useState({
    totalDeposits: 0,
    totalWithdrawals: 0,
    totalCommission: 0,
    totalFloat: 0,
  });

  useEffect(() => {
    let realmInstance: Realm | null = null;
    let transactions: Realm.Results<TransactionsSchema> | null = null;

    const loadFinancialData = async () => {
      try {
        realmInstance = await getRealm();
        transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');

        const currentCommission = await HomeCalculatorSummary();
        setCommission(currentCommission);

        const updateFinancialData = (collection: Realm.Results<TransactionsSchema>) => {
          const totalFloat = collection.sum('float') || 0;
          setSalio(`${totalFloat.toLocaleString()} Tzs`);
          setTransactionCount(collection.length);
        };

        updateFinancialData(transactions);

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
      <SalioCard title="Floti" balance={`${commission.totalFloat.toLocaleString()} Tzs`} />
      <SummaryCard title="Kamisheni" value={`${commission.totalCommission.toLocaleString()} Tzs`} />

      <NetworkCards
        selectedNetwork={selectedNetwork}
        onSelect={setSelectedNetwork}
      />

      <PeriodSelector
        selectedPeriod={selectedPeriod}
        onSelectPeriod={setSelectedPeriod}
      />

      <View style={styles.chartContainer}>
        {selectedPeriod === 'siku' ? (
          <DailyBarChart transactionCount={transactionCount} />
        ) : (
          <MonthlyBarChart transactionCount={transactionCount} />
        )}
      </View>

      <Text style={styles.sectionTitle}>Maendeleo ya blashara</Text>
    </ScrollView>
  );
};
