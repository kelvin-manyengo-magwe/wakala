import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: 'white',
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10, // For Android shadow
    },

  });