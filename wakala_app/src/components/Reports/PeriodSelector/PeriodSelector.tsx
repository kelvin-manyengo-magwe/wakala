//
// src/components/Reports/PeriodSelector/PeriodSelector.tsx - (THE DEFINITIVE NEW COMPONENT)
// This is a professional, working toggle button component.
//

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// --- PROPS INTERFACE ---
type PeriodSelectorProps = {
  selectedPeriod: 'siku' | 'mwezi';
  onSelectPeriod: (period: 'siku' | 'mwezi') => void;
};

export const PeriodSelector = ({ selectedPeriod, onSelectPeriod }: PeriodSelectorProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, selectedPeriod === 'siku' && styles.selectedButton]}
        onPress={() => onSelectPeriod('siku')}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, selectedPeriod === 'siku' && styles.selectedButtonText]}>
          Siku
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.button, selectedPeriod === 'mwezi' && styles.selectedButton]}
        onPress={() => onSelectPeriod('mwezi')}
        activeOpacity={0.7}
      >
        <Text style={[styles.buttonText, selectedPeriod === 'mwezi' && styles.selectedButtonText]}>
          Mwezi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// --- STYLES FOR THE COMPONENT ---
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6', // A light gray container background
    borderRadius: 8,
    padding: 4,
    marginVertical: 20,
    alignSelf: 'center', // Center the component on the screen
  },
  button: {
    flex: 1, // Make both buttons take up equal space
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#E53935', // A strong accent color for selection
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  selectedButtonText: {
    color: '#FFFFFF',
  },
});