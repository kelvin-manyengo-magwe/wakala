import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect, useCallback, useRef } from 'react';
import { styles } from './styles';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';
import { TransactionTypeToggle } from '../../components/TransactionTypeToggle/TransactionTypeToggle';
import Icon from 'react-native-vector-icons/MaterialIcons';



export const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedTransactions, setDisplayedTransactions] = useState<TransactionsSchema[]>([]);
  const [loading, setLoading] = useState('...inapakia');
  const realmRef = useRef<Realm | null>(null);
  const transactionsRef = useRef<Realm.Results<TransactionsSchema> | null>(null);

  //for the deleting functionality
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectionMode, setSelectionMode] = useState(false);


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


  const handleDeleteSelected = async () => {
    try {
      const realm = realmRef.current;
      if (!realm || realm.isClosed) return;

      realm.write(() => {
        selectedIds.forEach(id => {
          const toDelete = realm
            .objects<TransactionsSchema>('deposits_transaction')
            .filtered('_id == $0', id);

          if (toDelete.length > 0) {
            realm.delete(toDelete);

            console.log('✅ Data successfully deleted in realm database.');
          }
        });
      });

      setSelectedIds([]);
      setSelectionMode(false);
    } catch (error) {
      console.error('Error deleting:', error);
    }
  };



  return (
    <View style={styles.container}>
        {selectionMode && (
            <View style={{ padding: 0, margin: 0, width: '100%', alignSelf: 'stretch', marginBottom: 10 }}>
                    <View style={{
                                backgroundColor: '#f6ecec',
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                              }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                                  {selectedIds.length} Umechagua
                                </Text>

                                        <View style={styles.deleteCancelContainer}>
                                                    {/*Delete button*/}
                                                           <TouchableOpacity
                                                                  onPress={() => {
                                                                                 handleDeleteSelected();}}>
                                                                                    <Icon name="delete" size={24} color="black" />
                                                           </TouchableOpacity>


                                                    {/*Cancle button*/}
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



            {/*To be activated later for the searching of miamala easily*/}
      {/*<TextInput
        style={styles.searchInput}
        placeholder="Tafuta miamala..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />*/}

            {/*Weka and Toa miamala Toogle buttons*/}

            <TransactionTypeToggle
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    wekaLabel="Weka pesa"
                    toaLabel="Toa pesa"
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
                  renderItem={({ item }) => {
                    const isSelected = selectedIds.includes(item._id);

                    return (
                      <TouchableOpacity
                        onLongPress={() => {
                          setSelectionMode(true);
                          setSelectedIds([item._id]);
                        }}
                        onPress={() => {
                          if (selectionMode) {
                            if (isSelected) {
                              setSelectedIds(prev => {
                                const newIds = prev.filter(id => id !== item._id);
                                if (newIds.length === 0) {
                                  setSelectionMode(false);
                                }
                                return newIds;
                              });
                            } else {
                              setSelectedIds(prev => [...prev, item._id]);
                            }
                          }
                        }}
                        style={[
                          styles.transactionRow,
                          {
                            backgroundColor: isSelected ? '#e0e0e0' : '#f6ecec',
                          },
                        ]}
                      >
                        {/* Mtandao badge */}
                        <View style={styles.columnMtandao}>
                          <View style={styles.badge}>
                            <Text style={styles.badgeText}>halotel</Text>
                          </View>
                        </View>

                        {/* Wakati */}
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

                        {/* Muamala */}
                        <View style={styles.columnMuamala}>
                          <Text style={styles.transactionDetail}>{item.raw}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}


                  ListEmptyComponent={
                    <Text style={styles.emptyText}>Hakuna miamala kupatikana.</Text>
                  }
                />


    </View>
  );
};