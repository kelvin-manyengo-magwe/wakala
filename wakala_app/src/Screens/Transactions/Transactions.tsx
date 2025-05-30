import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect, useCallback, useRef } from 'react';
import { styles } from './styles';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { TransactionTypeToggle } from '../../components/TransactionTypeToggle/TransactionTypeToggle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Transactions = () => {
  const [displayedTransactions, setDisplayedTransactions] = useState<TransactionsSchema[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const realmRef = useRef<Realm | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'weka' | 'toa'>('weka');
  const [lastUpdate, setLastUpdate] = useState<string>('');

  // Create a stable copy of Realm data
  const createStableCopy = useCallback((transactions: Realm.Results<TransactionsSchema>) => {
    try {
      return transactions.map(item => ({
        _id: item._id,
        customer_name: item.customer_name,
        customer_no: item.customer_no,
        date: new Date(item.date),
        amount: item.amount,
        ref_no: item.ref_no,
        type: item.type === 'deposit' ? 'weka' : item.type === 'withdrawal' ? 'toa' : item.type,
        commission: item.commission,
        float: item.float,
        raw: item.raw,
        mno: item.mno,
        createdAt: item.createdAt instanceof Date ? item.createdAt : new Date(item.createdAt),
      }));
    } catch (e) {
      console.error('Error creating stable copy:', e);
      return [];
    }
  }, []);

  // Filter transactions based on selected tab
  const filterTransactions = useCallback((transactions: TransactionsSchema[]) => {
    return transactions.filter(item =>
      selectedTab === 'weka'
        ? item.type === 'weka' || item.type === 'deposit'
        : item.type === 'toa' || item.type === 'withdrawal'
    );
  }, [selectedTab]);

  // Load Realm data and set up live updates
  useEffect(() => {
    let isMounted = true;
    let transactions: Realm.Results<TransactionsSchema>;

    const setupRealm = async () => {
      try {
        const realm = await getRealm();
        if (!isMounted) return;

        realmRef.current = realm;
        transactions = realm
          .objects<TransactionsSchema>('deposits_transaction')
          .sorted('createdAt', true);

        // Initial data load
        const snapshot = createStableCopy(transactions);
        const filtered = filterTransactions(snapshot);
        setDisplayedTransactions(filtered);
        setLoading(false);
        setLastUpdate(new Date().toLocaleTimeString());

        // Set up listener for live updates
        transactions.addListener((collection) => {
          if (isMounted && realmRef.current && !realmRef.current.isClosed) {
            const newSnapshot = createStableCopy(collection);
            const filtered = filterTransactions(newSnapshot);
            setDisplayedTransactions(filtered);
            setLastUpdate(new Date().toLocaleTimeString());
          }
        });

      } catch (error) {
        console.error('Realm setup error:', error);
        setError('Failed to load transactions');
        setLoading(false);
      }
    };

    setupRealm();

    return () => {
      isMounted = false;
      if (transactions) {
        transactions.removeAllListeners();
      }
    };
  }, [createStableCopy, filterTransactions]);

  const handleDeleteSelected = async () => {
    try {
      const realm = realmRef.current;
      if (!realm || realm.isClosed) return;

      realm.write(() => {
        selectedIds.forEach(id => {
          const toDelete = realm.objectForPrimaryKey('deposits_transaction', id);
          if (toDelete) {
            realm.delete(toDelete);
          }
        });
      });

      setSelectedIds([]);
      setSelectionMode(false);
    } catch (error) {
      console.error('Error deleting:', error);
      setError('Failed to delete transactions');
    }
  };

  const renderTransactionItem = ({ item }: { item: TransactionsSchema }) => {
    const isSelected = selectedIds.includes(item._id);
    const transactionDate = item.createdAt instanceof Date ?
      item.createdAt : new Date(item.createdAt);

    return (
      <TouchableOpacity
        onLongPress={() => {
          setSelectionMode(true);
          setSelectedIds([item._id]);
        }}
        onPress={() => {
          if (selectionMode) {
            setSelectedIds(prev =>
              isSelected ?
                prev.filter(id => id !== item._id) :
                [...prev, item._id]
            );
          }
        }}
        style={[
          styles.transactionRow,
          { backgroundColor: isSelected ? '#e0e0e0' : '#f6ecec' },
        ]}
      >
        <View style={styles.columnMtandao}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}> {item.mno.charAt(0).toUpperCase() + item.mno.slice(1)}</Text>
          </View>
        </View>

        <View style={styles.columnWakati}>
          <Text style={styles.transactionTime}>
            {transactionDate.toLocaleString('sw-TZ', {
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
                    {error && (
                      <View style={styles.errorContainer}>
                        <Ionicons name="warning" size={20} color="red" />
                        <Text style={styles.errorText}>{error}</Text>
                      </View>
                    )}

        <View style={styles.updateContainer}>
          <Ionicons name="time" size={16} color="gray" />
          <Text style={styles.updateText}>Mara ya mwisho kusasishwa: {lastUpdate || 'Never'}</Text>
        </View>
      </View>

                {/* Delete container */}
      {selectionMode && (
        <View style={styles.selectionHeader}>
                      <View style={styles.selectionHeaderContent}>
                        <Text style={styles.selectionCountText}>
                           Umechagua {selectedIds.length}
                        </Text>

                                    <View style={styles.deleteCancelContainer}>
                                              <TouchableOpacity onPress={handleDeleteSelected}>
                                                        <Icon name="delete" size={24} color="black" />
                                              </TouchableOpacity>

                                              <TouchableOpacity onPress={() => {
                                                setSelectedIds([]);
                                                setSelectionMode(false);
                                              }}>
                                                        <Icon name="close" size={24} color="black" />
                                              </TouchableOpacity>
                                    </View>
                      </View>
        </View>
      )}

      <TransactionTypeToggle
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        wekaLabel="Weka pesa"
        toaLabel="Toa pesa"
      />

      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Mtandao</Text>
        <Text style={styles.headerText}>Wakati</Text>
        <Text style={styles.headerText}>Muamala</Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <Ionicons name="refresh" size={24} color="#007AFF" style={styles.spinner} />
          <Text style={styles.loadingText}>Inapakia...</Text>
        </View>
      ) : (
        <FlatList
          data={displayedTransactions}
          keyExtractor={(item) => item._id}
          renderItem={renderTransactionItem}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="receipt" size={48} color="#CCCCCC" />
              <Text style={styles.emptyText}>
                {`Hakuna miamala ya ${selectedTab === 'weka' ? 'kuweka' : 'kutoa'} pesa`}
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
};