import { StyleSheet } from 'react-native';


export const styles= StyleSheet.create({
    welcomeContainer: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30
    },
    circle: {
        borderRadius: 40,
        width: 80,
        height: 80,
        borderWidth: 3,
        borderColor: '#3498db',
        position: 'relative'
    },
    greenDot: {
        borderColor: 'green',
        backgroundColor: 'green',
        width: 12,
        height: 12,
        borderRadius: 6,
        position: 'absolute',
        top: 4,
        left: 5
    },
    person: {
        position: 'absolute',
        top: 6,
        left: 16
    },
    getStartedButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15
    },
    getStartedButtonFont: {
       fontWeight: 'bold',
       fontSize: 18,
       color: 'white'
    },
    getStartedButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20
    }
});