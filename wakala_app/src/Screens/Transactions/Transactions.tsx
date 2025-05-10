import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useCallback, useRef } from 'react';
import { styles } from './styles';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';

export const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedTransactions, setDisplayedTransactions] = useState<TransactionsSchema[]>([]);
  const realmRef = useRef<Realm | null>(null);
  const transactionsRef = useRef<Realm.Results<TransactionsSchema> | null>(null);

  const [selectedTab, setSelectedTab] = useState<'weka' | 'toa'>('weka');  //for the selected tab. accepts only 2 array vaues of weka and toa. Initially weka

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
        let filtered = transactions;

        if(selectedTab === 'weka') {
                    filtered = filtered.filter(item => item.type === 'weka');
                     }
                else {
                        filtered = filtered.filter(item => item.type === 'weka');
                    }


    return query.trim() === ''
      ? filtered
      : filtered.filter(item =>
          item.name?.toLowerCase().includes(query.toLowerCase())
        );
  }, [selectedTab]);

  // Update search results when query changes
  useEffect(() => {
    if (realmRef.current?.isClosed) return;
    if (transactionsRef.current) {
      const snapshot = createStableCopy(transactionsRef.current);
      setDisplayedTransactions(filterTransactions(snapshot, searchQuery));
    }
  }, [searchQuery, selectedTab, filterTransactions, createStableCopy]);


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tafuta miamala..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

            {/*Weka and Toa miamala Toogle buttons*/}

            <View style={styles.tabBar}>
                    <TouchableOpacity
                      style={[styles.tabButton, selectedTab === 'weka' && styles.activeTab]}
                      onPress={() => setSelectedTab('weka')}
                    >
                          <Text style={[styles.tabText, selectedTab === 'weka' && styles.activeTabText]}>
                            Weka pesa
                          </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.tabButton, selectedTab === 'toa' && styles.activeTab]}
                      onPress={() => setSelectedTab('toa')}
                    >
                      <Text style={[styles.tabText, selectedTab === 'toa' && styles.activeTabText]}>
                        Toa pesa
                      </Text>
                    </TouchableOpacity>
            </View>

            {/* Titles */}
                  <View style={styles.headerRow}>
                    <Text style={styles.headerText}>Mtandao</Text>
                    <Text style={styles.headerText}>Wakati</Text>
                    <Text style={styles.headerText}>Muamala</Text>
                  </View>

            {/*Changing flatlist with the wakati and miamala transactions*/}
                <FlatList
                  data={displayedTransactions}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (


                    <View style={styles.transactionRow}>

                                             {/*Mtandao badge column*/}
                                  <View style={styles.columnMtandao}>
                                           <View style={styles.badge}>
                                                <Text style={styles.badgeText}>halotel</Text>
                                           </View>
                                  </View>

                                        {/*column Wakati*/}
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

                  )}
                  ListEmptyComponent={
                    <Text style={styles.emptyText}>Hakuna miamala kupatikana.</Text>
                  }
                />


    </View>
  );
};