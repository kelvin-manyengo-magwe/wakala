import { View, Text, FlatList, TextInput } from 'react-native';
import { useState, useEffect, useCallback, useRef } from 'react';
import { styles } from './styles';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';

export const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedTransactions, setDisplayedTransactions] = useState<TransactionsSchema[]>([]);
  const realmRef = useRef<Realm | null>(null);
  const transactionsRef = useRef<Realm.Results<TransactionsSchema> | null>(null);

  // Create a stable copy of Realm data
  const createStableCopy = useCallback((transactions: Realm.Results<TransactionsSchema>) => {
    return Array.from(transactions).map(item => ({
      ...JSON.parse(JSON.stringify(item)), // Deep clone
      createdAt: item.createdAt instanceof Date ?
        new Date(item.createdAt) :
        new Date(item.createdAt as string)
    }));
  }, []);

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
          setDisplayedTransactions(filterTransactions(snapshot, searchQuery));
        }

        // Set up listener for live updates
        transactions.addListener((collection, changes) => {
          if (isMounted && transactionsRef.current) {
            const newSnapshot = createStableCopy(transactionsRef.current);
            setDisplayedTransactions(filterTransactions(newSnapshot, searchQuery));
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
  }, []);

  // Filter transactions based on search query
  const filterTransactions = useCallback((transactions: TransactionsSchema[], query: string) => {
    return query.trim() === ''
      ? transactions
      : transactions.filter(item =>
          item.name?.toLowerCase().includes(query.toLowerCase())
        );
  }, []);

  // Update search results when query changes
  useEffect(() => {
    if (transactionsRef.current) {
      const snapshot = createStableCopy(transactionsRef.current);
      setDisplayedTransactions(filterTransactions(snapshot, searchQuery));
    }
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tafuta miamala..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={displayedTransactions}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            {/* Left Side - Primary Info */}
            <View style={styles.leftSide}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.transactionName}>{item.name}</Text>
                {item.type && (
                  <View style={styles.typeBadge}>
                    <Text style={styles.typeText}>{item.type}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.transactionDate}>
                {item.createdAt.toLocaleDateString()}
              </Text>
            </View>

            {/* Right Side - Amounts */}
            <View style={styles.rightSide}>
              <Text style={styles.transactionAmount}>{item.amount} TZS</Text>
              <View style={styles.amountDetails}>
                <Text style={styles.commissionText}>
                  Kamisheni: {item.commission || 0} TZS
                </Text>
                <Text style={styles.floatText}>
                  Floti: {item.float || 0} TZS
                </Text>
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Hakuna miamala inayolingana</Text>
        }
      />
    </View>
  );
};