import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // White background for the list area
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // For title centering if back button has fixed width
        paddingTop: Platform.OS === 'ios' ? 50 : 20, // Status bar height
        paddingBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
    },
    backButton: {
        padding: 8, // Make touch area larger
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1A1A1A',
        textAlign: 'center',
        flex: 1, // Allow title to take space and center
    },
    headerRightPlaceholder: { // To balance the back button for title centering
        width: 28 + 16, // Approx width of back button icon + padding
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100, // Push it down a bit
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#666',
        marginTop: 20,
    },
    emptySubText: {
        fontSize: 14,
        color: '#999',
        marginTop: 8,
        textAlign: 'center',
        paddingHorizontal: 40,
    },
});


export default styles;