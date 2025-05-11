import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type TransactionTypeToggleProps = {
  selectedTab: 'weka' | 'toa';
  onTabChange: (tab: 'weka' | 'toa') => void;
  wekaLabel?: string;
  toaLabel?: string;
  activeTabColor?: string;
  inactiveTabColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
};

export const TransactionTypeToggle = ({
  selectedTab,
  onTabChange,
  wekaLabel = 'Weka pesa',
  toaLabel = 'Toa pesa',
  activeTabColor = '#3f51b5',
  inactiveTabColor = '#f5f5f5',
  activeTextColor = '#fff',
  inactiveTextColor = '#666',
}: TransactionTypeToggleProps) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === 'weka'
            ? { backgroundColor: activeTabColor }
            : { backgroundColor: inactiveTabColor }
        ]}
        onPress={() => onTabChange('weka')}
      >
        <Text style={[
          styles.tabText,
          selectedTab === 'weka'
            ? { color: activeTextColor }
            : { color: inactiveTextColor }
        ]}>
          {wekaLabel}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === 'toa'
            ? { backgroundColor: activeTabColor }
            : { backgroundColor: inactiveTabColor }
        ]}
        onPress={() => onTabChange('toa')}
      >
        <Text style={[
          styles.tabText,
          selectedTab === 'toa'
            ? { color: activeTextColor }
            : { color: inactiveTextColor }
        ]}>
          {toaLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabText: {
    fontWeight: '500',
  },
});