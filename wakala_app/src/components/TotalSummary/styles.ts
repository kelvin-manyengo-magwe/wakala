import { StyleSheet } from 'react-native';
import { totalSummaryHeight, totalSummaryWidth, width } from './TotalSummary';


export const styles = StyleSheet.create({

    summaryContainer: {
        width: totalSummaryWidth, // 90% of screen width
        height: totalSummaryHeight, // 20% of screen height
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)', // Add border color for visibility
        borderRadius: 10, // Rounded corners for better aesthetics

    },
});