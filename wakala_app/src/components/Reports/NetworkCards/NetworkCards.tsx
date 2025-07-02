//
// src/components/Reports/NetworkCards/NetworkCards.tsx - (THE UPGRADED VERSION)
// This component now displays financial data for each MNO.
//

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AllMnoSummaries } from '../../../Services/Database/models/FloatCommissionCount/FloatCommissionCount'; // Adjusted path based on your image

// Define MNO display properties in one place.
const NETWORKS = [
    { id: 'vodacom', name: 'Vodacom', color: '#E60000', logo: require('../../../../assets/images/icons/mpesa-logo.jpg') }, // Assuming Vodacom -> M-Pesa
    { id: 'airtel', name: 'Airtel', color: '#D82A2F', logo: require('../../../../assets/images/icons/airtel-money-logo.png') },
    { id: 'halotel', name: 'Halotel', color: '#00A750', logo: require('../../../../assets/images/icons/halo-pesa-logo.png') },
    { id: 'tigo', name: 'Tigo', color: '#01529C', logo: require('../../../../assets/images/icons/mixx-by-yas-logo.png') },
];

// --- Helper function to format numbers ---
const formatValue = (num: number) => num ? num.toLocaleString(undefined, { maximumFractionDigits: 0 }) : '0';


// --- THE NEW PROPS ---
// The component now needs all summary data to display.
type NetworkCardsProps = {
  summaries: AllMnoSummaries;
};

export const NetworkCards = ({ summaries }: NetworkCardsProps) => {
  return (
    <View style={styles.container}>
      {NETWORKS.map((network) => {
        // Get the specific data for this MNO from the passed summaries.
        // If it doesn't exist, provide a default zero-value object.
        const networkData = summaries[network.id] || { totalFloat: 0, totalCommission: 0 };

        return (
          <View key={network.id} style={styles.card}>
            <Image source={network.logo} style={styles.logo} />

            {/* Displaying Float */}
            <View style={styles.dataRow}>
                <Text style={styles.dataLabel}>Floti:</Text>
                <Text style={[styles.dataValue, { color: network.color }]}>
                    {formatValue(networkData.totalFloat)}
                </Text>
            </View>

            {/* Displaying Commission */}
            <View style={styles.dataRow}>
                <Text style={styles.dataLabel}>Kamisheni:</Text>
                <Text style={[styles.dataValue, { color: network.color }]}>
                    {formatValue(networkData.totalCommission)}
                </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

// --- REDESIGNED STYLES for the new "data-first" look ---
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows cards to wrap to the next line (2x2 grid)
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  card: {
    width: '48%', // Two cards per row with a small gap
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12, // Space between rows
    // Clean, professional border instead of heavy shadows
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 4,
  },
  dataLabel: {
    fontSize: 14,
    color: '#6B7280', // A soft gray for labels
  },
  dataValue: {
    fontSize: 14,
    fontWeight: '700', // Bold value to make it stand out
  },
});