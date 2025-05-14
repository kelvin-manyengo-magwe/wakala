import { StyleSheet } from 'react-native';





export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginVertical: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    paddingHorizontal: 16,
    paddingVertical: 8,
     color: '#333',
  },

  selected: {
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  button: {
      paddingHorizontal: 30,
      paddingVertical: 8,
      backgroundColor: '#fff',
      marginHorizontal: 1,
      borderRadius: 6,
    },
    activeButton: {
      backgroundColor: '#f28b82', // pale red
    },
    buttonText: {
      fontSize: 16,
      color: '#000',
      fontWeight: 'bold',
    },
    activeButtonText: {
      color: '#fff',
    },

});


