//
// src/components/Graphs/MonthlyBarChart/MonthlyBarChart.tsx - (DEFINITIVE RESTYLE)
// The styling is now professional and matches the app's theme. The data logic is unchanged.
//

import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { MonthlyChartData } from '../../../Services/Database/models/FloatCommissionCount/FloatCommissionCount';

// The color scheme you requested
const MNOS_IN_ORDER = [
    { id: 'vodacom', name: 'Vodacom', color: '#D50000' },
    { id: 'airtel', name: 'Airtel', color: '#ED6358' },
    { id: 'halotel', name: 'Halotel', color: '#F7C6C6' },
    { id: 'yas', name: 'Yas', color: '#FEF0F0' },
];

const getNiceMaxValue = (maxValue: number): number => {
    if (maxValue <= 10) return 10; const p = Math.pow(10, Math.floor(Math.log10(maxValue))); const d = Math.ceil(maxValue / p); if (d > 5) return 10 * p; if (d > 2) return 5 * p; return 2 * p;
};

type MonthlyBarChartProps = { data: MonthlyChartData[] };

export const MonthlyBarChart: React.FC<MonthlyBarChartProps> = ({ data }) => {
  const { barData, maxValue, stepValue } = useMemo(() => {
    if (!data || data.length === 0) return { barData: [], maxValue: 10, stepValue: 2 };
    const transformedBarData = data.flatMap(monthData => {
        const monthGroup = [{ value: 0, label: monthData.month.substring(0,3), spacing: 25, labelTextStyle: { color: 'gray', fontSize: 11 }}];
        MNOS_IN_ORDER.forEach(mnoInfo => {
            const txData = monthData.data.find(d => d.mno === mnoInfo.id);
            monthGroup.push({ value: txData ? txData.count : 0, frontColor: mnoInfo.color, spacing: 3 });
        });
        return monthGroup;
    });
    const maxVal = Math.max(10, ...data.flatMap(m => m.data.map(d => d.count)));
    const finalMaxValue = getNiceMaxValue(maxVal * 1.25);
    return { barData: transformedBarData, maxValue: finalMaxValue, stepValue: finalMaxValue / 4 };
  }, [data]);

  const renderLegend = () => <View style={styles.legendContainer}>{MNOS_IN_ORDER.map(mno => ( <View key={mno.id} style={styles.legendItem}><View style={[styles.legendColorBox, {backgroundColor: mno.color}]} /><Text style={styles.legendText}>{mno.name}</Text></View>))}</View>;

  if (barData.length <= 1) return <View style={styles.container}><Text style={styles.noDataText}>Hakuna data ya mwezi ya kuonyesha.</Text></View>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maendeleo ya Miamala (kwa Mwezi)</Text>
      {renderLegend()}
      <View style={styles.chartAreaWrapper}>
        <Text style={styles.yAxisTitle}>Idadi</Text>
        <View style={{flex: 1}}>
          <BarChart
            data={barData} barWidth={14} initialSpacing={15} isAnimated roundedTop
            maxValue={maxValue} stepValue={stepValue} noOfSections={4}
            rulesType="dashed" rulesColor="#F0F0F0"
            xAxisColor="#DDD" yAxisColor="transparent"
            yAxisTextStyle={{ fontSize: 10, color: 'gray' }}
          />
        </View>
      </View>
    </View>
  );
};

// --- STYLES REWRITTEN FOR A CLEAN, MODERN LOOK. NO LOCAL CONTAINER STYLE. ---
const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        // Let the parent container in Reports.tsx handle background and border
    },
    title: { fontSize: 16, fontWeight: '600', color: '#333', textAlign: 'center', marginBottom: 12 },
    chartAreaWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center' },
    yAxisTitle: { transform: [{rotate: '-90deg'}], color: 'gray', fontSize: 12, fontWeight: '500', position: 'absolute', left: -25, top: '45%'},
    legendContainer: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 10, gap: 15 },
    legendItem: { flexDirection: 'row', alignItems: 'center' },
    legendColorBox: { width: 10, height: 10, borderRadius: 2, marginRight: 5 },
    legendText: { fontSize: 11, color: '#444' },
    noDataText: { textAlign: 'center', paddingTop: 80, color: 'gray' },
});