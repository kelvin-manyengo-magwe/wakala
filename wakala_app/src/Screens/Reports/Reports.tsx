import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SummaryCard } from '../../components/Reports/SummaryCard/SummaryCard';
import { NetworkCards } from '../../components/Reports/NetworkCards/NetworkCards';
import { PeriodSelector } from '../../components/Reports/PeriodSelector/PeriodSelector';
import { styles } from './styles';
import { SalioCard } from '../../components/Reports/SalioCard/SalioCard';
import { DailyBarChart } from '../../components/Graphs/DailyBarChart/DailyBarChart';
import { MonthlyBarChart } from '../../components/Graphs/MonthlyBarChart/MonthlyBarChart';




export const Reports = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('halotel');
  const [selectedPeriod, setSelectedPeriod] = useState<'siku' | 'mwezi'>('siku');


    //setting the state for the initial balance. But later to be changed
    const [ salio, setSalio ] = useState('4,693,500 Tzs')

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <SalioCard title="Salio" balance={salio} />

      <SummaryCard title="kamisheni" value="1,082 Tzs" />

      <NetworkCards
        selectedNetwork={selectedNetwork}
        onSelect={setSelectedNetwork}
      />

      <PeriodSelector
            selectedPeriod={selectedPeriod}
            onSelectPeriod={setSelectedPeriod}
       />

            <View style={styles.chartContainer}>
                    {selectedPeriod === 'siku' ? <DailyBarChart /> : <MonthlyBarChart />}
            </View>

      <NetworkCards
        selectedNetwork={selectedNetwork}
        onSelectPeriod={setSelectedNetwork}
      />

      <Text style={styles.sectionTitle}>Maendeleo ya blashara</Text>

      <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Pakua ripoti</Text>
      </TouchableOpacity>


    </ScrollView>
  );
};

