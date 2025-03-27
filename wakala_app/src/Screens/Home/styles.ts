import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
       whiteBackground : {
            flex: 1,
            backgroundColor: 'white'
       },
       header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            /*elevation: 4,
            shadowRadius: 4,
            shadowColor: 'black',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },*/
            paddingHorizontal: 10
       },
       iconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
       },
       iconSpacing: {
            marginHorizontal: 8
       },
       wakalaFont: {
            fontWeight: 'bold',
            fontSize: 20,
            color: 'black'
       },
       welcomeMessage: {
            marginVertical: 10,
            marginHorizontal: 10
       }
});