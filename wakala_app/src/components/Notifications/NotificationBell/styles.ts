import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    badgeContainer: {
        position: 'absolute',
        right: 4,
        top: 4,
        backgroundColor: '#D7263D', // Your brand red
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFF'
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});


export default styles;