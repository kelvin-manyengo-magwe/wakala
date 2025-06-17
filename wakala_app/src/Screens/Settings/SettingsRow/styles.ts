import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingVertical: 12, // Slightly less padding for a tighter look
        paddingHorizontal: 15,
        borderRadius: 12, // Rounded cards
        marginBottom: 10, // Space between cards
        // Elevation/Shadow for card effect
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
    },
    iconContainer: {
        width: 40, // Fixed width for icon alignment
        alignItems: 'center', // Center icon in its container
        marginRight: 15,
    },
    labelText: {
        flex: 1, // Take remaining space
        fontSize: 17,
        color: '#1C1C1E', // Slightly off-black
        fontWeight: '500',
    },
    actionContainer: {
        justifyContent: 'flex-end',
    },
    switchStyle: {
        transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] // Slightly smaller switch
    }
});


export default styles;