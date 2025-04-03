import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
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