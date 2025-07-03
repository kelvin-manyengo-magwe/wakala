//
// src/components/Graphs/DailyBarChart/DailyBarChart.tsx - (THE DEFINITIVE FINAL REWRITE)
// This is a complete, professional, and working stacked bar chart component.
//

import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { DailyChartData } from '../../../Services/Database/models/FloatCommissionCount/FloatCommissionCount';

// --- MNO BRANDING (Consistent across the app) ---
const MNO_COLORS: { [key: string]: string } = {
    vodacom: '#D50000',
    airtel: '#ED6358',
    halotel: '#F7C6C6',
    yas: '#FEF0F0',
    default: '#BDBDBD'
};
const MNOS_IN_ORDER = ['vodacom', 'airtel', 'halotel', 'yas'];

// --- PROPS INTERFACE ---
interface DailyBarChartProps {
  data: DailyChartData[]; // It receives the pre-processed daily data
}

// --- HELPER FUNCTION (To find a nice ceiling value for the Y-Axis) ---
const getNiceMaxValue = (maxValue: number): number => {
    if (maxValue <= 10) return 10;
    const exponent = Math.floor(Math.log10(maxValue));
    const powerOf10 = Math.pow(10, exponent);
    const firstDigit = Math.ceil(maxValue / powerOf10);
    if (firstDigit > 5) return 10 * powerOf10;
    if (firstDigit > 2) return 5 * powerOf10;
    return 2.5 * powerOf10;
};


// --- THE REBUILT COMPONENT ---
export const DailyBarChart: React.FC<DailyBarChartProps> = ({ data }) => {

    // `useMemo` is a performance hook. This logic only runs if the props change.
    const { stackData, maxValue, stepValue } = useMemo(() => {
        if (!data || data.length === 0) {
            return { stackData: [], maxValue: 10, stepValue: 2 };
        }

        // --- 1. DYNAMIC DATA TRANSFORMATION for Stacked Bars ---
        const transformedData = data.map(day => {
            // Sort the MNOs within each day's stack according to our defined order for consistent coloring.
            const sortedStacks = MNOS_IN_ORDER.map(mnoId => {
                const mnoData = day.data.find(d => d.mno === mnoId);
                return {
                    value: mnoData ? mnoData.count : 0,
                    color: MNO_COLORS[mnoId]
                };
            }).filter(stack => stack.value > 0); // Only include stacks with actual data

            return {
                stacks: sortedStacks,
                label: day.date.substring(0, 3), // e.g., "Jumatatu" -> "Jum"
            };
        });

        // --- 2. DYNAMICALLY CALCULATE THE Y-AXIS ---
        // Find the day with the highest TOTAL transaction count.
        const maxVal = Math.max(10, ...data.map(day => day.data.reduce((sum, mno) => sum + mno.count, 0)));
        const finalMaxValue = getNiceMaxValue(maxVal * 1.25);
        const finalStepValue = finalMaxValue / 4;

        return { stackData: transformedData, maxValue: finalMaxValue, stepValue: finalStepValue };
    }, [data]);

    // --- LEGEND UI ---
    const renderLegend = () => (
        <View style={styles.legendContainer}>{MNOS_IN_ORDER.map(mnoId => ( <View key={mnoId} style={styles.legendItem}><View style={[styles.legendColorBox, {backgroundColor: MNO_COLORS[mnoId]}]} /><Text style={styles.legendText}>{mnoId.charAt(0).toUpperCase() + mnoId.slice(1)}</Text></View>))}</View>
    );

    // --- MAIN RENDER ---
    if (!stackData || stackData.length === 0) {
        return <View style={styles.container}><Text style={styles.noDataText}>Hakuna data ya siku 7 zilizopita.</Text></View>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Miamala ya Siku 7 Zilizopita</Text>
            {renderLegend()}
            <View style={styles.chartAreaWrapper}>
                <Text style={styles.yAxisTitle}>Idadi</Text>
                <View style={{flex: 1}}>
                    <BarChart
                        stackData={stackData}
                        // Appearance & Styling
                        barWidth={50}
                        spacing={35}
                        barBorderRadius={4}
                        isAnimated
                        // Axis & Grid Line Properties
                        rulesType="dashed"
                        rulesColor="#F0F0F0"
                        yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
                        xAxisLabelTextStyle={{ color: 'gray', fontSize: 11, paddingTop: 5 }}
                        yAxisColor="transparent"
                        xAxisColor="#E0E0E0"
                        // Dynamic Values for a perfect chart
                        maxValue={maxValue}
                        stepValue={stepValue}
                        noOfSections={4}
                    />
                </View>
            </View>
        </View>
    );
};


// --- CLEAN, SELF-CONTAINED STYLES for a professional look ---
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 12,
        height: 330,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    chartAreaWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    yAxisTitle: {
        transform: [{ rotate: '-90deg' }],
        color: 'gray',
        fontSize: 12,
        fontWeight: '500',
        position: 'absolute',
        left: -25,
        top: '45%',
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 10,
        gap: 12,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendColorBox: {
        width: 10,
        height: 10,
        borderRadius: 2,
        marginRight: 5,
    },
    legendText: {
        fontSize: 11,
        color: '#444',
    },
    noDataText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'gray',
        fontSize: 14,
    },
});