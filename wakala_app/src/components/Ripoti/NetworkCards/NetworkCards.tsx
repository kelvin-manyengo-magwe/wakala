// components/Ripoti/NetworkSelector.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NETWORKS = ['voda com', 'airtel', 'halotel', 'yas'];

type NetworkSelectorProps = {
  selectedNetwork: string;
  onSelect: (network: string) => void;
};

export const NetworkSelector = ({ selectedNetwork, onSelect }: NetworkSelectorProps) => (
  <View style={styles.container}>
    {NETWORKS.map((network) => (
      <TouchableOpacity
        key={network}
        style={[
          styles.networkButton,
          selectedNetwork === network && styles.selectedNetwork,
        ]}
        onPress={() => onSelect(nnetwork)}
      >
        <Text style={styles.networkText}>{network}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  networkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  selectedNetwork: {
    backgroundColor: '#3B82F6',
  },
  networkText: {
    color: '#111827',
  },
});