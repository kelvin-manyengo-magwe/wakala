import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // softer background
    padding: 16,
  },
  searchInput: {
    height: 45,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 14,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Android shadow
  },
  leftSide: {
    flexDirection: 'column',
  },
  transactionName: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '600',
  },
  transactionDate: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    color: '#177AD5',
    fontWeight: 'bold',
  },
  emptyText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
    color: '#9CA3AF',
  },
  tabBar: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: '#ddd',
      backgroundColor: '#fff',
    },
    tabButton: {
      flex: 1,
      padding: 15,
      alignItems: 'center',
    },
    tabText: {
      fontSize: 16,
      color: '#999',
    },
    activeTab: {
      borderWidth: 1,
      borderColor: '#007BFF',
    },
    activeTabText: {
      color: '#007BFF',
      fontWeight: 'bold',
    },
    headerRow: {
        flexDirection: 'row',
        gap: 30,
        alignItems: 'flex-start',
        paddingHorizontal: 5,
        marginTop: 12,
        marginBottom: 10,
      },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#222',
      },
  transactionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  columnMtandao: {
    flex: 2,
    paddingHorizontal: 4,
  },

  columnWakati: {
    flex: 2,
    paddingHorizontal: 4,
  },

  columnMuamala: {
    flex: 5,
    paddingHorizontal: 4,
  },
  transactionTime: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
  },

  transactionDetail: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    flexShrink: 1,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#aaa',
  },
    badge: {
      alignSelf: 'flex-start',
      backgroundColor: 'red',
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 2,
      marginBottom: 4,
    },

    badgeText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
    },
    deleteCancelContainer : {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
        },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    spinner: {
      marginBottom: 10,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    statusBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f5f5f5',
    },
    updateContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            width: '100%',
        },
    selectionHeaderContent: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

        },
});
