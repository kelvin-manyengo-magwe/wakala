import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F0F2F5', // Main background, light gray
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