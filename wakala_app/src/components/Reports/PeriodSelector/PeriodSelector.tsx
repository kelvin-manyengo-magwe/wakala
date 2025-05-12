// components/Ripoti/PeriodSelector.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';




export const PeriodSelector = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Siku</Text>
    <Text style={styles.label}>Mwezi</Text>
  </View>
);

