import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Store network details, including colors and logos, in one place for easy management.
const NETWORKS = [
    { id: 'vodacom', name: 'Vodacom', color: '#E60000', logo: require('../../../../assets/images/icons/mpesa-logo.jpg') }, // Assuming you will add these logos
    { id: 'airtel', name: 'Airtel', color: '#F02C39', logo: require('../../../../assets/images/icons/airtel-money-logo.png') },
    { id: 'halotel', name: 'Halotel', color: '#00A859', logo: require('../../../../assets/images/icons/halo-pesa-logo.png') },
    { id: 'tigo', name: 'Tigo', color: '#00529D', logo: require('../../../../assets/images/icons/mixx-by-yas-logo.png') }, // Assuming T-Pesa
];

type NetworkCardsProps = {
  selectedNetwork: string;
  onSelect: (networkId: string) => void;
};

export const NetworkCards = ({ selectedNetwork, onSelect }: NetworkCardsProps) => {
  return (
    <View style={styles.container}>
      {NETWORKS.map((network) => {
        const isSelected = selectedNetwork === network.id;
        return (
          <TouchableOpacity
            key={network.id}
            style={[
              styles.networkCard,
              { backgroundColor: isSelected ? network.color : '#FFFFFF' },
              isSelected ? styles.selectedCard : styles.unselectedCard
            ]}
            onPress={() => onSelect(network.id)}
            activeOpacity={0.8}
          >
            <Image source={network.logo} style={styles.logo} />
            <Text style={[styles.networkName, { color: isSelected ? '#FFFFFF' : '#333333' }]}>
              {network.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


// These styles are self-contained for the new design
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around', // Distribute cards evenly
      marginVertical: 16,
      gap: 10, // Add a gap between cards
    },
    networkCard: {
      flex: 1, // Allow each card to grow and take up equal space
      height: 90, // Consistent height for all cards
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    unselectedCard: {
      borderWidth: 1,
      borderColor: '#E0E0E0',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    selectedCard: {
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    logo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      marginBottom: 8,
    },
    networkName: {
      fontSize: 14,
      fontWeight: '600',
    },
  });