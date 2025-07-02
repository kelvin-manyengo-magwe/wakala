//
// src/components/Graphs/MonthlyBarChart/MonthlyBarChart.tsx - (DEFINITIVE REWRITE)
//
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { MonthlyChartData } from '../../../Services/Database/models/FloatCommissionCount/FloatCommissionCount';

const MNO_COLORS: { [key: string]: string } = {
  halotel: '#00A750', // Green
  airtel: '#D82A2F', // Red
  vodacom: '#E60000', // Brighter Red for M-Pesa/Vodacom
  tigo: '#01529C',  // Blue
  yas: '#F39C12',   // Orange
  default: '#BDBDBD'
};

const MNOS_IN_ORDER = ['halotel', 'airtel', 'vodacom', 'tigo', 'yas'];

interface MonthlyBarChartProps {
  data: MonthlyChartData[]; // Receives processed monthly data
}

export const MonthlyBarChart: React.FC<MonthlyBarChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
        <View style={styles.container}>
          <Text style={styles.noDataText}>Hakuna miamala ya miezi iliyopita.</Text>
        </View>
      );
  }

  // Transform data into grouped bar format
  const barData = data.flatMap(monthData => {
    // Start of a group for a new month
    const monthGroup = [{ value: 0, label: monthData.month.substring(0,3) }];
    
    // Add a bar for each MNO
    MNOS_IN_ORDER.forEach(mnoId => {
        const mnoData = monthData.data.find(d => d.mno === mnoId);
        monthGroup.push({
            value: mnoData ? mnoData.count : 0,
            frontColor: MNO_COLORS[mnoId] || MNO_COLORS.default,
        });
    });
    return monthGroup;
  });

  const maxValue = Math.max(...data.flatMap(month => month.data.map(mno => mno.count)), 10);
  const chartMaxValue = Math.ceil(maxValue * 1.25 / 5) * 5;

  const renderLegend = () => (
    <View style={styles.legendContainer}>
        {MNOS_IN_ORDER.map(mnoId => (
            <View key={mnoId} style={styles.legendItem}>
                <View style={[styles.legendColorBox, {backgroundColor: MNO_COLORS[mnoId] || MNO_COLORS.default}]} />
                <Text style={styles.legendText}>{mnoId.charAt(0).toUpperCase() + mnoId.slice(1)}</Text>
            </View>
        ))}
    </View>
  );


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Miamala kwa Mwezi</Text>
        {renderLegend()}
        <View style={{flex: 1}}>
        <BarChart
            data={barData}
            barWidth={15}
            // Dynamic Axis
            maxValue={chartMaxValue}
            noOfSections={4}
            // Visual Polish
            yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
            xAxisLabelTextStyle={{ color: 'gray', fontSize: 11 }}
            yAxisColor="#E0E0E0"
            xAxisColor="#E0E0E0"
            rulesType='dashed'
            rulesColor='#F0F0F0'
            isAnimated
        />
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 12,
        height: 300,
      },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    noDataText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'gray',
        fontSize: 15,
      },
    legendContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 10,
        gap: 10,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendColorBox: {
        width: 10,
        height: 10,
        borderRadius: 2,
        marginRight: 4,
    },
    legendText: {
        fontSize: 11,
        color: '#555',
    },
})