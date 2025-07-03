//
// src/Screens/Reports/Reports.tsx - (THE FINAL DEFINITIVE VERSION)
// This file connects the powerful data "brain" to all the upgraded UI components.
//
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { processMnoSummaries, AllMnoSummaries, DailyChartData, MonthlyChartData } from '../../Services/Database/models/FloatCommissionCount/FloatCommissionCount';

import { SummaryCard } from '../../components/Reports/SummaryCard/SummaryCard';
import { NetworkCards } from '../../components/Reports/NetworkCards/NetworkCards';
import { PeriodSelector } from '../../components/Reports/PeriodSelector/PeriodSelector';
import { DailyBarChart } from '../../components/Graphs/DailyBarChart/DailyBarChart';
import { MonthlyBarChart } from '../../components/Graphs/MonthlyBarChart/MonthlyBarChart';
import { styles } from './styles';

const formatNumber = (num: number) => num ? num.toLocaleString(undefined, { maximumFractionDigits: 0 }) : '0';

export const Reports = () => {
  const [summaries, setSummaries] = useState<AllMnoSummaries>({});
  const [dailyData, setDailyData] = useState<DailyChartData[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyChartData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<'siku' | 'mwezi'>('mwezi');
  const isFocused = useIsFocused();

  const processData = useCallback((collection: Realm.Results<TransactionsSchema>) => {
      const { summaries, dailyChartData, monthlyChartData } = processMnoSummaries(collection);
      setSummaries(summaries);
      setDailyData(dailyChartData);
      setMonthlyData(monthlyChartData);
  }, []);

  const loadInitialData = useCallback(async () => {
      setIsLoading(true);
      const realm = await getRealm();
      const transactions = realm.objects<TransactionsSchema>('deposits_transaction');
      processData(transactions);
      setIsLoading(false);
  }, [processData]);

  useEffect(() => {
      if(isFocused) {
          loadInitialData();
          const realm = getRealm().then(r => {
              const transactions = r.objects<TransactionsSchema>('deposits_transaction');
              transactions.addListener(processData);
              return () => transactions.removeAllListeners();
          });
          return () => {
              realm.then(cleanup => cleanup && cleanup());
          }
      }
  }, [isFocused, loadInitialData]);

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await loadInitialData();
    setIsRefreshing(false);
  }, [loadInitialData]);

  const grandTotals = useMemo(() => {
    let totalFloat = 0;
    let totalCommission = 0;
    for (const mnoId in summaries) {
      totalFloat += summaries[mnoId].totalFloat;
      totalCommission += summaries[mnoId].totalCommission;
    }
    return { totalFloat, totalCommission };
  }, [summaries]);

  if (isLoading) return <ActivityIndicator size="large" color="#E60000" style={{flex: 1, justifyContent: 'center'}} />;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} colors={['#D82A2F']} />}
    >
      <View style={styles.headerRow}>
        <SummaryCard title="Jumla ya Floti" value={`${formatNumber(grandTotals.totalFloat)} Tzs`} style={styles.summaryCard} />
        <SummaryCard title="Jumla ya Kamisheni" value={`${formatNumber(grandTotals.totalCommission)} Tzs`} style={styles.summaryCard} />
      </View>

      <NetworkCards summaries={summaries} />

      <PeriodSelector selectedPeriod={selectedPeriod} onSelectPeriod={setSelectedPeriod} />

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