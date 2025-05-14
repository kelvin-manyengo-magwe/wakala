import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useCallback, useRef } from 'react';
import { styles } from './styles';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { TransactionTypeToggle } from '../../components/TransactionTypeToggle/TransactionTypeToggle';


export const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedTransactions, setDisplayedTransactions] = useState<TransactionsSchema[]>([]);
  const [loading, setLoading] = useState('...inapakia');
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

                    //showing if the real time update is happening
                        console.log('🔄 Real Time update triggered on the UI : ', newSnapshot.length);

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
                        filtered = filtered.filter(item => item.type === 'toa');
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
            <TouchableOpacity onPress={async () => {
              const realm = await getRealm();
              realm.write(() => {
                realm.create('deposits_transaction',  {
                                                         "_id": "dldlkd",
                                                         "customer_name": "POLLYCAP JOSEPH RANGE",
                                                         "customer_no": "255628262413",
                                                         "date": "2024-10-14T03:57:24.000Z",
                                                         "amount": 500,
                                                         "ref_no": "2676708942",
                                                         "type": "weka",
                                                         "commission": 23,
                                                         "float": 99,
                                                         "raw": "Utambulisho wa Muamala: 2676708942. Umeweka TSH 500.00 kwa POLLYCAP JOSEPH RANGE, 255628262413 wakati 2024/10/14 06:57:24, kamisheni: TSH 23.00. Salio jipya la floti ni TSH 99,600.00. Asante!",
                                                         "createdAt": "2025-05-14T08:15:56.865Z"
                                                       }
);
              });
            }}>
              <Text style={{ padding: 10, backgroundColor: 'green', color: 'white' }}>Add Test Weka</Text>
            </TouchableOpacity>


            <TransactionTypeToggle
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    wekaLabel="Weka pesa"
                    toaLabel="Toa pesa"
                    activeTabColor="#3f51b5"
                    inactiveTabColor="#f5f5f5"
                  />

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