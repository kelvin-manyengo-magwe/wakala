import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
        headerText: {
            fontSize: 18,
            fontWeight: 'bold',
            padding: 5,
            color: 'black',
        },
        mnoContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        mnoUpperRow: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingBottom: 10,
        },
        mnoBottomRow: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        mnoLogo: {
            width: 100,
            height: 85,
            borderRadius: 10,
        },
        mnoLogoContainer: {
            marginHorizontal: 10,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.1)',
            padding: 1,
            borderRadius: 10,
        },
    });