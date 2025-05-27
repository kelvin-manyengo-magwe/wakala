import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
    imagesContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    wakalaLogoImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    wakalaWordImage: {
        width: 160,
        height: 40,
        marginBottom: 5,
    },
    subText: {
        fontSize: 12,
        color: '#555',
    },
    formContainer: {
        width: '85%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 45,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    forgotText: {
        fontSize: 13,
        color: '#333',
        marginBottom: 25,
    },
    loginButton: {
        backgroundColor: '#E53935',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
