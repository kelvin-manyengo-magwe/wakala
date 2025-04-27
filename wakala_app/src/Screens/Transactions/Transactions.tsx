import { View, Text, FlatList, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';


export const Transactions = () => {
             const [searchQuery, setSearchQuery] = useState('');  //the search input entered by the user
              const [filteredTransactions, setFilteredTransactions] = useState(data); // Filtered list of transactions

              // Sample transaction data
              const data = [
                { id: '1', name: 'Transaction A', amount: '1000 TZS' },
                { id: '2', name: 'Transaction B', amount: '2000 TZS' },
                { id: '3', name: 'Transaction C', amount: '3000 TZS' },
              ];

              // Function to handle search input changes
              const handleSearch = (query) => {
                setSearchQuery(query);
                if (query === '') {
                  setFilteredTransactions(data); // Reset to all data when search is empty
                } else {
                  const filtered = data.filter((item) =>
                        item.name.toLowerCase().includes(query.toLowerCase())
                              );
                              setFilteredTransactions(filtered);
                            }
                          };

                   //Later to use the useEffect to fetch the transactions based on time e.g 24h, 7d, 30d, 90d, e.t.c

        return (
                    <View style={styles.container}>
                          {/* Search Input */}
                          <TextInput
                            style={styles.searchInput}
                            placeholder="Tafuta miamala..." // "Search transactions..." in Swahili
                            value={searchQuery}
                            onChangeText={handleSearch}
                          />

                                  {/* Transactions List */}
                                  <FlatList
                                        data={filteredTransactions}
                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => (
                                            <View style={styles.transactionItem}>
                                                     <Text style={styles.transactionName}>{item.name}</Text>
                                                     <Text style={styles.transactionAmount}>{item.amount}</Text>
                                             </View>
                                                    )}
                                                    ListEmptyComponent={<Text style={styles.emptyText}>Hakuna miamala inayolingana</Text>} // "No matching transactions" in Swahili
                                  />
                    </View>

            )
    }


