import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';


export const Transactions = () => {
             const [searchQuery, setSearchQuery] = useState('');
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
              },
              transactionName: {
                fontSize: 16,
                color: '#333',
              },
              transactionAmount: {
                fontSize: 16,
                color: '#177AD5',
                fontWeight: 'bold',
              },
              emptyText: {
                marginTop: 20,
                textAlign: 'center',
                fontSize: 16,
                color: '#777',
              },
});