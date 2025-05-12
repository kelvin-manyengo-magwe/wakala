import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
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
   transactionItem: {
          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          shadowOpacity: 0.05,
          elevation: 2,
        },
    listContent: {
        paddingBottom: 20,
        },
        scrollContainer: {
            flexGrow: 1,
            paddingBottom: 20,
          },

    });