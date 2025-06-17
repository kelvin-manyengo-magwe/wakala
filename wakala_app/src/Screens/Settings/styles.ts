import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F0F2F5', // Main background, light gray
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'ios' ? 50 : 20, // Status bar
        paddingBottom: 12,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF', // White header
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    headerButton: {
        padding: 8,
        minWidth: 40, // Ensure touch area for back button is decent
    },
    headerTitle: {
        fontSize: 22, // Title like screenshot
        fontWeight: 'bold', // Bold title
        color: '#1C1C1E', // Dark text for title
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        paddingHorizontal: 15, // Horizontal padding for the list of settings
        paddingTop: 20,        // Top padding for the first item
        paddingBottom: 30,
    },
    // sectionSeparator: { // Optional if you want thicker lines between groups of settings
    //    height: 10,
    //    backgroundColor: 'transparent', // Effectively a margin
    // }
});


export default styles;