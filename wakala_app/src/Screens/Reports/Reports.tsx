import { View, Text } from 'react-native';


export const Reports = () => {

        return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Ripoti</Text>
                    </View>
            )
    }


// screens/RipotiScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SummaryCard } from '../components/Ripoti/SummaryCard';
import { NetworkSelector } from '../components/Ripoti/NetworkSelector';
import { PeriodSelector } from '../components/Ripoti/PeriodSelector';

const RipotiScreen = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('voda com');
  const [businessData] = useState([
    { label: 'nyumbani', value: 'Home' },
    { label: 'miamala', value: 'Transactions' },
    { label: 'mita nata', value: 'Metrics' },
    { label: 'ripoti', value: 'Reports' },
    { label: 'sini', value: 'Settings' },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Ripoti</Text>

      <SummaryCard title="Salio" value="********" />
      <SummaryCard title="kamisheni" value="23,000Tzs" />

      <NetworkSelector
        selectedNetwork={selectedNetwork}
        onSelect={setSelectedNetwork}
      />

      <PeriodSelector />

      <NetworkSelector
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



export default RipotiScreen;