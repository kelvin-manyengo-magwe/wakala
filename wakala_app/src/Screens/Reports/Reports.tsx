//
// src/Screens/Reports/Reports.tsx - (DEFINITIVE UPGRADE)
//

import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
// Import the new powerful data processor and its types
import { processMnoSummaries, AllMnoSummaries, DailyChartData, MonthlyChartData } from '../../Services/Database/models/FloatCommissionCount/FloatCommissionCount';

// Import UI components
import { SummaryCard } from '../../components/Reports/SummaryCard/SummaryCard';
import { NetworkCards } from '../../components/Reports/NetworkCards/NetworkCards';
import { PeriodSelector } from '../../components/Reports/PeriodSelector/PeriodSelector';
import { DailyBarChart } from '../../components/Graphs/DailyBarChart/DailyBarChart';
import { MonthlyBarChart } from '../../components/Graphs/MonthlyBarChart/MonthlyBarChart';
import { styles } from './styles';

const formatNumber = (num: number) => num ? num.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '0';

export const Reports = () => {
  // We now have state for ALL our processed data
  const [summaries, setSummaries] = useState<AllMnoSummaries>({});
  const [dailyData, setDailyData] = useState<DailyChartData[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<'siku' | 'mwezi'>('mwezi');


  useEffect(() => {
    let realmInstance: Realm;

    const loadAndListen = async () => {
      setIsLoading(true);
      realmInstance = await getRealm();
      const transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');

      // The update function is now much simpler, it just sets the state
      const updateData = (collection: Realm.Results<TransactionsSchema>) => {
        const { summaries, dailyChartData, monthlyChartData } = processMnoSummaries(collection);
        setSummaries(summaries);
        setDailyData(dailyChartData);
        setMonthlyData(monthlyChartData);
        setIsLoading(false);
      };

      // Initial load
      updateData(transactions);
      // Setup listener
      transactions.addListener(updateData);
    };

    loadAndListen();

    return () => {
      if (realmInstance && !realmInstance.isClosed) {
        realmInstance.objects('deposits_transaction').removeAllListeners();
      }
    };
  }, []);

  const grandTotals = useMemo(() => {
    let totalFloat = 0;
    let totalCommission = 0;
    for (const mnoId in summaries) {
      totalFloat += summaries[mnoId].totalFloat;
      totalCommission += summaries[mnoId].totalCommission;
    }
    return { totalFloat, totalCommission };
  }, [summaries]);


  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <SummaryCard title="Jumla ya Floti" value={`${formatNumber(grandTotals.totalFloat)} Tzs`} style={styles.summaryCard} />
          <SummaryCard title="Jumla ya Kamisheni" value={`${formatNumber(grandTotals.totalCommission)} Tzs`} style={styles.summaryCard} />
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color="#E60000" style={{marginVertical: 40}} />
        ) : (
          <NetworkCards summaries={summaries} />
        )}

        <PeriodSelector
          selectedPeriod={selectedPeriod}
          onSelectPeriod={setSelectedPeriod}
        />

        {/* --- DYNAMIC CHARTS IN ACTION --- */}
        <View style={styles.chartContainer}>
          {selectedPeriod === 'siku' ? (
            <DailyBarChart data={dailyData} />
          ) : (
            <MonthlyBarChart data={monthlyData} />
          )}
        </View>

        <Text style={styles.sectionTitle}>Maendeleo ya biashara</Text>
    </ScrollView>
  );
};