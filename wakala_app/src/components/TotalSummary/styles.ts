import { StyleSheet } from 'react-native';
import { totalSummaryHeight, totalSummaryWidth, width } from './TotalSummary';


export const styles = StyleSheet.create({
    summaryContainer: {
        width: totalSummaryWidth, // 90% of screen width
        height: totalSummaryHeight, // 20% of screen height
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)', // Add border color for visibility
        borderRadius: 10, // Rounded corners for better aesthetics
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftSide: {
        flex: 1,  //to take equal space
    },
    rightSide: {
        flex: 1,    //to take equal space
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
    },
    amount: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#007bff"
    },
    infoColumn: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
});