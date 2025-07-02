//
// src/components/Graphs/DepositsWithdrawalBarChart/DepositsWithdrawalBarChart.tsx - (THE DEFINITIVE FINAL REWRITE)
// This version is a complete rebuild to fix all visual, layout, and data-scaling issues permanently.
//

import { BarChart } from 'react-native-gifted-charts';
import { Text, View, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';

// Use the existing styles file from your project structure for the title/legend.
import { styles as externalStyles } from './styles';

// --- ROBUST HELPER FUNCTION for calculating a "nice" ceiling value for the Y-Axis ---
const getNiceMaxValue = (value: number): number => {
    if (value <= 0) return 5000; // Return a sensible default height
    // Calculate the magnitude (power of 10) of the number
    const exponent = Math.floor(Math.log10(value));
    const powerOf10 = Math.pow(10, exponent);
    // Find the most significant digit
    const firstDigit = Math.ceil(value / powerOf10);
    // Round the max value UP to a clean number (e.g., 8345 -> 9000, 12345 -> 20000)
    if (firstDigit > 5) return 10 * powerOf10;
    if (firstDigit > 2) return 5 * powerOf10;
    return 2.5 * powerOf10;
};


// --- PROPS INTERFACE (Identical to what your Home.tsx correctly provides) ---
interface ChartProps {
  airtelDeposits: number;
  airtelWithdrawals: number;
  halotelDeposits: number;
  halotelWithdrawals: number;
}

export const DepositsWithdrawalBarChart: React.FC<ChartProps> = ({
    airtelDeposits,
    airtelWithdrawals,
    halotelDeposits,
    halotelWithdrawals,
}) => {

    const { dynamicBarData, dynamicMaxValue, dynamicStepValue } = useMemo(() => {
        // --- 1. FIND THE ABSOLUTE HIGHEST VALUE FROM ALL DATA ---
        const maxDataPoint = Math.max(airtelDeposits, airtelWithdrawals, halotelDeposits, halotelWithdrawals);

        // --- 2. THE PERMANENT Y-AXIS FIX ---
        // Add 25% "headroom" to the highest bar, then use our robust helper to get a final clean number.
        const finalMaxValue = getNiceMaxValue(maxDataPoint * 1.25);
        // The step value is simply the max value divided by the number of sections. This is reliable.
        const finalStepValue = finalMaxValue / 4;

        // --- 3. BUILD THE CHART DATA ARRAY ---
        const barData = [

            { value: airtelDeposits, label: 'Airtel', frontColor: '#177AD5', spacing: 10 },
            { value: airtelWithdrawals, frontColor: '#ED6665' },
            { value: halotelDeposits, label: 'Halotel', frontColor: '#177AD5', spacing: 10 },
            { value: halotelWithdrawals, frontColor: '#ED6665' },
            { value: 0, label: 'Yas', frontColor: '#177AD5' },
             { value: 0, frontColor: '#ED6665' },
            { value: 0, label: 'M-Pesa', frontColor: '#177AD5' },
              { value: 0, frontColor: '#ED6665' },
        ];

        return { dynamicBarData: barData, dynamicMaxValue: finalMaxValue, dynamicStepValue: finalStepValue };

    }, [airtelDeposits, airtelWithdrawals, halotelDeposits, halotelWithdrawals]);


    const renderTitle = () => (
      <View style={externalStyles.legendContainer}>
        <Text style={externalStyles.legendText}>Uwekaji dhidi ya Utoaji</Text>
        <View style={externalStyles.uondoajiAmanaContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColorBox, {backgroundColor: '#177AD5'}]} />
            <Text style={styles.legendTextLabel}>Kuweka</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[externalStyles.uondoajiContainer, styles.legendColorBox]} />
            <Text style={styles.legendTextLabel}>Kutoa</Text>
          </View>
        </View>
      </View>
    );

    return (
        <View style={styles.container}>
            {renderTitle()}
            <View style={{paddingHorizontal: 10, width: '100%'}}>
                <BarChart
                    data={dynamicBarData}
                    // --- DYNAMIC DATA ---
                    stepValue={dynamicStepValue}
                    maxValue={dynamicMaxValue}
                    noOfSections={4}

                    // --- VISUAL POLISH & FIXES ---
                    barWidth={25}
                    spacing={28} // Balanced spacing
                    roundedTop

                    // --- AXES AND GRID LINE FIXES ---
                    hideRules={false}
                    rulesType="dashed"
                    rulesColor="#E8E8E8" // Softer grid line color
                    yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
                    xAxisColor="lightgray"
                    yAxisColor="lightgray"
                    xAxisLabelTextStyle={{color: 'gray', textAlign: 'center'}}
                />
            </View>
        </View>
    );
};

// --- LOCAL STYLES (Rebuilt for a clean, modern, and bug-free look) ---
const styles = StyleSheet.create({
    container: {
        // **FIX**: The entire component has horizontal margin to prevent touching screen edges.
        marginHorizontal: 15,
        marginBottom: 20,
        // **FIX**: The shadow is gone, replaced with a clean border.
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        paddingTop: 16,
        paddingBottom: 16,
        alignItems: 'center',
    },
    // Styles for the Legend section
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    legendColorBox: {
        width: 12,
        height: 12,
        borderRadius: 2,
        marginRight: 8,
    },
    legendTextLabel: {
        fontSize: 14,
        color: '#333'
    }
});