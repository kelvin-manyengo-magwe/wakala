import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginVertical: 16,
    textAlign: 'center',
  },
  downloadButton: {
    backgroundColor: '#3B82F6',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 16,
  },
  menuItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
  },
  menuText: {
    color: '#4B5563',
    textAlign: 'center',
  },
});