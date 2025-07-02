//
// src/Screens/Reports/Reports.tsx - (THE UPGRADED VERSION)
// The logic is now simplified to calculate totals and display the data.
//

import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { processMnoSummaries, AllMnoSummaries } from '../../Services/Database/models/FloatCommissionCount/FloatCommissionCount';

// Import UI components
import { SummaryCard } from '../../components/Reports/SummaryCard/SummaryCard';
import { NetworkCards } from '../../components/Reports/NetworkCards/NetworkCards';
import { PeriodSelector } from '../../components/Reports/PeriodSelector/PeriodSelector';
import { DailyBarChart } from '../../components/Graphs/DailyBarChart/DailyBarChart';
import { MonthlyBarChart } from '../../components/Graphs/MonthlyBarChart/MonthlyBarChart';
import { styles } from './styles';

// Helper to format numbers with commas
const formatNumber = (num: number) => num.toLocaleString(undefined, { maximumFractionDigits: 2 });


export const Reports = () => {
  // One state to hold all summary data, and one for loading.
  const [allSummaries, setAllSummaries] = useState<AllMnoSummaries>({});
  const [isLoading, setIsLoading] = useState(true);

  // Default state for the period selector
  const [selectedPeriod, setSelectedPeriod] = useState<'siku' | 'mwezi'>('mwezi');


  useEffect(() => {
    let realmInstance: Realm;

    const loadAndListen = async () => {
      setIsLoading(true);
      realmInstance = await getRealm();
      const transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');

      const updateData = (collection: Realm.Results<TransactionsSchema>) => {
        const summaries = processMnoSummaries(collection);
        setAllSummaries(summaries);
        setIsLoading(false); // Stop loading after data is processed
      };

      // Initial load
      updateData(transactions);
      // Setup listener for live updates
      transactions.addListener(updateData);
    };

    loadAndListen();

    // Cleanup function
    return () => {
      if (realmInstance && !realmInstance.isClosed) {
        realmInstance.objects('deposits_transaction').removeAllListeners();
      }
    };
  }, []);

  // --- NEW: Calculate GRAND TOTALS using useMemo for efficiency ---
  const grandTotals = useMemo(() => {
    let totalFloat = 0;
    let totalCommission = 0;

    // Loop through the values of our summaries object to calculate grand totals
    for (const mnoId in allSummaries) {
      const summary = allSummaries[mnoId];
      totalFloat += summary.totalFloat;
      totalCommission += summary.totalCommission;
    }
    return { totalFloat, totalCommission };
  }, [allSummaries]); // This logic only re-runs when the summary data changes


  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          {/* THE BIG CARDS NOW SHOW THE CALCULATED GRAND TOTALS */}
          <SummaryCard title="Jumla ya Floti" value={`${formatNumber(grandTotals.totalFloat)} Tzs`} style={styles.summaryCard} />
          <SummaryCard title="Jumla ya Kamisheni" value={`${formatNumber(grandTotals.totalCommission)} Tzs`} style={styles.summaryCard} />
        </View>

        {/* --- REMOVED SELECT FUNCTIONALITY. JUST DISPLAY ALL CARDS. --- */}
        {/* Pass the entire 'allSummaries' object down to the NetworkCards component. */}
        {isLoading ? (
          <ActivityIndicator size="large" color="#E60000" style={{marginVertical: 40}} />
        ) : (
          <NetworkCards summaries={allSummaries} />
        )}

        {/* The rest of your report screen remains */}
        <PeriodSelector
          selectedPeriod={selectedPeriod}
          onSelectPeriod={setSelectedPeriod}
        />
        <View style={styles.chartContainer}>
          {selectedPeriod === 'siku' ? (
            <DailyBarChart transactionCount={0} /> // These can now be powered by `allSummaries` as well
          ) : (
            <MonthlyBarChart transactionCount={0} />
          )}
        </View>
        <Text style={styles.sectionTitle}>Maendeleo ya blashara</Text>
    </ScrollView>
  );
};