import { StyleSheet } from 'react-native';
import { totalSummaryHeight, totalSummaryWidth, width } from './TotalSummary';


export const styles = StyleSheet.create({
    summaryParentContainer: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 0,
    },
    summaryContainer: {
            width: totalSummaryWidth, // 90% of screen width
                height: totalSummaryHeight, // 20% of screen height
                borderWidth: 1,
                borderColor: 'black', // Add border color for visibility
                borderRadius: 10, // Rounded corners for better aesthetics

                backgroundColor: '#ffffff', // Optional: Add background color
                shadowColor: '#000', // Shadow for better visual appeal
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 2 },
                elevation: 4, // Shadow for Android

    },
});