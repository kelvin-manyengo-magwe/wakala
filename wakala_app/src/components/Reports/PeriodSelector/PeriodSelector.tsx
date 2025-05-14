import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface PeriodSelectorProps {
  selectedPeriod: 'siku' | 'mwezi';
  onSelectPeriod: (period: 'siku' | 'mwezi') => void;
}

export const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  selectedPeriod,
  onSelectPeriod,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedPeriod === 'siku' && styles.activeButton,
        ]}
        onPress={() => onSelectPeriod('siku')}
      >
        <Text
          style={[
            styles.buttonText,
            selectedPeriod === 'siku' && styles.activeButtonText,
          ]}
        >
          Siku
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedPeriod === 'mwezi' && styles.activeButton,
        ]}
        onPress={() => onSelectPeriod('mwezi')}
      >
        <Text
          style={[
            styles.buttonText,
            selectedPeriod === 'mwezi' && styles.activeButtonText,
          ]}
        >
          Mwezi
        </Text>
      </TouchableOpacity>
    </View>
  );
};
