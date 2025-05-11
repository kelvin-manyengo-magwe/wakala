import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { styles } from './styles';



type TransactionListProps = {
  transactions: TransactionsSchema[];
  emptyListText?: string;
  onPressTransaction?: (transaction: TransactionsSchema) => void;
  badgeColor?: string;
  badgeTextColor?: string;
  timeFormat?: string;
};

export const TransactionList = ({
  transactions,
  emptyListText = 'Hakuna miamala kupatikana.',
  onPressTransaction,
  badgeColor = '#e0e0e0',
  badgeTextColor = '#333',
  timeFormat = 'sw-TZ',
}: TransactionListProps) => {

  const renderItem = ({ item }: { item: TransactionsSchema }) => (
    <View style={styles.transactionRow}>
      {/* Mtandao badge column */}
      <View style={styles.columnMtandao}>
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <Text style={[styles.badgeText, { color: badgeTextColor }]}>
            {item.network || 'halotel'}
          </Text>
        </View>
      </View>

      {/* column Wakati */}
      <View style={styles.columnWakati}>
        <Text style={styles.transactionTime}>
          {item.createdAt?.toLocaleString(timeFormat, {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>

      {/* column Muamala */}
      <View style={styles.columnMuamala}>
        <Text style={styles.transactionDetail}>
          {item.raw || item.amount || 'N/A'}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text style={styles.emptyText}>{emptyListText}</Text>
      }
    />
  );
};
