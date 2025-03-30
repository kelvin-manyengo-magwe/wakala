import { StyleSheet } from 'react-native';
import { totalSummaryHeight, totalSummaryWidth, width } from './TotalSummary';


export const styles = StyleSheet.create({
    totalSummarySpace: {
        width: totalSummaryWidth,
        height: totalSummaryHeight,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)', // Add border color for visibility
        borderRadius: 10, // Rounded corners for better aesthetics
    },
    summaryContainer: {
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
        justifyContent: 'space-evenly',
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
    summaryHeading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        padding: 10,

    },
});