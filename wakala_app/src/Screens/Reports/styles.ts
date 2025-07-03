import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F9FAFB',
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
    chartContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,        // Match other cards
        borderWidth: 1,          // Use a border instead of elevation/shadow
        borderColor: '#F3F4F6',  // A very light border color
        minHeight: 330,          // Ensure it has enough space
        marginTop: 8,            // Add a little space above the chart
    },
  headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 8,
    },
    summaryCard: {
      flex: 1, // Makes each card take up half the width
    },
});