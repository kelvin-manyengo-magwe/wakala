import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type TransactionTypeToggleProps = {
  selectedTab: 'weka' | 'toa';
  onTabChange: (tab: 'weka' | 'toa') => void;
  wekaLabel?: string;
  toaLabel?: string;
};

export const TransactionTypeToggle = ({
  selectedTab,
  onTabChange,
  wekaLabel = 'Weka pesa',
  toaLabel = 'Toa pesa',
}: TransactionTypeToggleProps) => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === 'weka' ? styles.activeTab : styles.inactiveTab,
          { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
        ]}
        onPress={() => onTabChange('weka')}
      >
        <Text style={styles.tabText}>
          {wekaLabel}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabButton,
          selectedTab === 'toa' ? styles.activeTab : styles.inactiveTab,
          { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
        ]}
        onPress={() => onTabChange('toa')}
      >
        <Text style={styles.tabText}>
          {toaLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#f6ecec',
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 0,
  },
  activeTab: {

    borderColor: '#000',
    borderWidth: 1,
  },
  inactiveTab: {

    borderColor: '#000',
  },
  tabText: {
    color: '#000',
    fontWeight: '500',
  },
});
