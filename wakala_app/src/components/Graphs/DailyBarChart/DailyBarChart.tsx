import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { DailyChartData } from '../../../Services/Database/models/FloatCommissionCount/FloatCommissionCount'; // Corrected import path

const MNO_COLORS: { [key: string]: string } = {
  halotel: '#00A750', // Green
  airtel: '#D82A2F', // Red
  vodacom: '#E60000', // Brighter Red for M-Pesa/Vodacom
  tigo: '#01529C',  // Blue
  yas: '#F39C12',   // Orange
  default: '#BDBDBD'
};

interface DailyBarChartProps {
  data: DailyChartData[]; // Component now receives processed data
}

export const DailyBarChart: React.FC<DailyBarChartProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>Hakuna miamala ya wiki hii.</Text>
      </View>
    );
  }

  // Find the highest transaction count in a single day to set the chart's Y-axis
  const maxValue = Math.max(...data.map(day => day.data.reduce((sum, mno) => sum + mno.count, 0)), 10);
  const chartMaxValue = Math.ceil(maxValue * 1.25 / 5) * 5; // Add 25% headroom, round up to nearest 5
  
  // Transform the data into the format the library needs
  const barData = data.map(day => ({
    stacks: day.data.map(mno => ({
      value: mno.count,
      color: MNO_COLORS[mno.mno] || MNO_COLORS.default,
    })),
    label: day.date.substring(0, 3), // e.g., "Jumatatu" -> "Jum"
  }));
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Miamala ya Wiki Hii (kwa Siku)</Text>
      <View style={styles.yAxisTitleWrapper}>
        <Text style={styles.yAxisTitleText}>Idadi ya Miamala</Text>
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <BarChart
            stackData={barData}
            barWidth={35}
            spacing={40}
            barBorderRadius={4}
            // Dynamic Y-Axis
            maxValue={chartMaxValue}
            noOfSections={4}
            // Visual Polish
            yAxisTextStyle={{ color: 'gray', fontSize: 10 }}
            xAxisLabelTextStyle={{ color: 'gray', fontSize: 11 }}
            yAxisColor="#E0E0E0"
            xAxisColor="#E0E0E0"
            rulesType='dashed'
            rulesColor='#F0F0F0'
            showValuesOnTopOfBars={false} // Clean look
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 12,
        height: 300,
      },
    title: {
      position: 'absolute',
      top: 15,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
    },
    noDataText: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'gray',
        fontSize: 15,
      },
    yAxisTitleWrapper: {
        justifyContent: 'center',
        width: 20,
      },
    yAxisTitleText: {
        fontSize: 12,
        fontWeight: '500',
        color: 'gray',
        transform: [{ rotate: '-90deg' }],
      },
});