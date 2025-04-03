import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
       whiteBackground : {
            flexGrow: 1,
            backgroundColor: 'white',
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
       greetingContainer: {
            marginVertical: 10,
            marginHorizontal: 10
       },
       centerContainer: {
            alignItems: 'center',
            justifyContent: 'center',
       },
      summaryParentContainer: {
            marginTop: 10,
            alignItems: 'center',
      },
      slidingCardWrapper: {
          flexGrow: 0, //disallow sliding card from shrinking
           height: 250,
      },
      contentContainer: {
          flex: 1,  //allowing the border box items to expand
          alignItems: 'center',  //centering the contents
      },
      mnoServicePanel: {
          marginTop: 10,
          marginHorizontal: 15,
      },
});