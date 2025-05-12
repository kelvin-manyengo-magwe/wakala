// components/Ripoti/SummaryCard.tsx
import React from 'react';
import { styles } from './styles';
import { View, Text, StyleSheet } from 'react-native';

type SummaryCardProps = {
  title: string;
  value: string;
};

export const SummaryCard = ({ title, value }: SummaryCardProps) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

