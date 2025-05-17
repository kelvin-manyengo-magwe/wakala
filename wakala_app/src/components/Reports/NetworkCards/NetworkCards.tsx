// components/Ripoti/NetworkSelector.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';



const NETWORKS = ['vodacom', 'airtel', 'halotel', 'yas'];

type NetworkSelectorProps = {
  selectedNetwork: string;
  onSelect: (network: string) => void;
};

export const NetworkCards = ({ selectedNetwork, onSelect }: NetworkSelectorProps) => (
  <View style={styles.container}>
            {NETWORKS.map((network) => (
                      <TouchableOpacity
                        key={network}
                        style={[
                          styles.networkButton,
                          selectedNetwork === network && styles.selectedNetwork,
                        ]}
                        onPress={() => onSelect(network)}
                      >
                                <Text style={styles.networkText}>{network}</Text>
                      </TouchableOpacity>
            ))}
  </View>
);

