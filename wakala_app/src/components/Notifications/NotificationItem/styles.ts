import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0', // Light separator
    },
    lastItemContainer: {
        borderBottomWidth: 0, // No border for the last item
    },
    unreadItem: {
         backgroundColor: '#FFF8E1', // Example: slight background tint for unread
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    // title: { // If having a separate title line
    //     fontSize: 16,
    //     fontWeight: '600',
    //     color: '#1A1A1A',
    //     marginBottom: 3,
    // },
    message: {
        fontSize: 15,
        color: '#333333',
        lineHeight: 21, // For better readability
    },
    unreadText: {
         fontWeight: 'bold', // making text bold for unread
    },
    timestamp: {
        fontSize: 13,
        color: '#8E8E93', // Softer color for timestamp
        marginTop: 5,
    },
});

export default styles;