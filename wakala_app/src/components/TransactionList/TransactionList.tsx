import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { styles } from './styles';

export const TransactionList = () => {
  const [displayedTransactions, setDisplayedTransactions] = useState<TransactionsSchema[]>([]);
  const realmRef = useRef<Realm | null>(null);
  const transactionsRef = useRef<Realm.Results<TransactionsSchema> | null>(null);
  const [selectedTab, setSelectedTab] = useState<'weka' | 'toa'>('weka');
  const [searchQuery, setSearchQuery] = useState(''); // Added searchQuery state

  // Create a stable copy of Realm data
  const createStableCopy = useCallback((transactions: Realm.Results<TransactionsSchema>) => {
    return Array.from(transactions).map(item => ({
      ...JSON.parse(JSON.stringify(item)), // Deep clone
      createdAt: item.createdAt instanceof Date ?
        new Date(item.createdAt) :
        new Date(item.createdAt as string)
    }));
  }, []);

  // Filter transactions based on search query and selected tab
  const filterTransactions = useCallback((transactions: TransactionsSchema[]) => {
    let filtered = transactions.filter(item => item.type === selectedTab);

    return searchQuery.trim() === ''
      ? filtered
      : filtered.filter(item =>
          item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.raw?.toLowerCase().includes(searchQuery.toLowerCase())
        );
  }, [selectedTab, searchQuery]);

  // Load Realm data and set up live updates
  useEffect(() => {
    let isMounted = true;

    const setupRealm = async () => {
      try {
        const realm = await getRealm();
        if (!isMounted) {
          realm.close();
          return;
        }

        realmRef.current = realm;
        const transactions = realm
          .objects<TransactionsSchema>('deposits_transaction')
          .sorted('createdAt', true);

        transactionsRef.current = transactions;

        // Initial data load
        const snapshot = createStableCopy(transactions);
        if (isMounted) {
          setDisplayedTransactions(filterTransactions(snapshot));
        }

        // Set up listener for live updates
        transactions.addListener((collection, changes) => {
          if (isMounted && transactionsRef.current) {
            const newSnapshot = createStableCopy(transactionsRef.current);
            setDisplayedTransactions(filterTransactions(newSnapshot));
          }
        });

      } catch (error) {
        console.error('Realm setup error:', error);
      }
    };

    setupRealm();

    return () => {
      isMounted = false;
      if (transactionsRef.current) {
        transactionsRef.current.removeAllListeners();
      }
      if (realmRef.current && !realmRef.current.isClosed) {
        realmRef.current.close();
      }
    };
  }, [filterTransactions, createStableCopy]);

  const renderItem = ({ item }: { item: TransactionsSchema }) => (
      <View>
    <View style={styles.transactionRow}>
      <View style={styles.columnMtandao}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.network || 'halotel'}</Text>
        </View>
      </View>

      <View style={styles.columnWakati}>
        <Text style={styles.transactionTime}>
          {item.createdAt?.toLocaleString('sw-TZ', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>

      <View style={styles.columnMuamala}>
        <Text style={styles.transactionDetail}>
          {item.raw}
        </Text>
      </View>
    </View>
    </View>
  );

  return (
    <View>
      {/* Titles */}
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Mtandao</Text>
        <Text style={styles.headerText}>Wakati</Text>
        <Text style={styles.headerText}>Muamala</Text>
      </View>

      {/* Use displayedTransactions instead of transactions */}
      <FlatList
        data={displayedTransactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Hakuna miamala kupatikana.</Text>
        }
      />
    </View>
  );
};