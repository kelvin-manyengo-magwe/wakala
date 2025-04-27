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
});
