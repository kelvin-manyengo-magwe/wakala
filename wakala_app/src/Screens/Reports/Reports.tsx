import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SummaryCard } from '../../components/Reports/SummaryCard/SummaryCard';
import { NetworkCards } from '../../components/Reports/NetworkCards/NetworkCards';
import { PeriodSelector } from '../../components/Reports/PeriodSelector/PeriodSelector';
import { styles } from './styles';
import { SalioCard } from '../../components/Reports/SalioCard/SalioCard';



export const Reports = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('halotel');
  const [businessData] = useState([
    { label: 'nyumbani', value: 'Home' },
    { label: 'miamala', value: 'Transactions' },
    { label: 'mita nata', value: 'Metrics' },
    { label: 'ripoti', value: 'Reports' },
    { label: 'sini', value: 'Settings' },
  ]);

    //setting the state for the initial balance. But later to be changed
    const [ salio, setSalio ] = useState('1,250,000 Tzs')

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <SalioCard title="Salio" balance={salio} />

      <SummaryCard title="kamisheni" value="23,000Tzs" />

      <NetworkCards
        selectedNetwork={selectedNetwork}
        onSelect={setSelectedNetwork}
      />

      <PeriodSelector />

      <NetworkCards
        selectedNetwork={selectedNetwork}
        onSelect={setSelectedNetwork}
      />

      <Text style={styles.sectionTitle}>Maendeleo ya blashara</Text>

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Pakua ripoti</Text>
      </TouchableOpacity>

      <View style={styles.bottomMenu}>
        {businessData.map((item) => (
          <TouchableOpacity key={item.label} style={styles.menuItem}>
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

