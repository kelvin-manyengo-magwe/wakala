import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';



export const PeriodSelector = ({ selectedPeriod, onSelectPeriod }: any) => (
  <View style={styles.container}>
            <TouchableOpacity onPress={() => onSelectPeriod('siku')}>
                      <Text style={[styles.label, selectedPeriod === 'siku' && styles.selected]}>
                            Siku
                      </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onSelectPeriod('mwezi')}>
                      <Text style={[styles.label, selectedPeriod === 'mwezi' && styles.selected]}>
                            Mwezi
                      </Text>
            </TouchableOpacity>
  </View>
);
