import { StyleSheet } from 'react-native';




export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  networkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
  },
  selectedNetwork: {
    backgroundColor: '#3B82F6',
  },
  networkText: {
    color: '#111827',
  },
});