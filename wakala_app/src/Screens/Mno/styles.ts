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
    pieChart3DContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 10,
        },
    mnoServicePanelContainer: {

        width: '100%',
        padding: 5,

        marginBottom: 20,
         },
     transactionListContainer: {
            marginTop: 15,
       },
    transactionTypeToggleContainer: {
        marginTop: 3,
        padding: 5,
        },


  });