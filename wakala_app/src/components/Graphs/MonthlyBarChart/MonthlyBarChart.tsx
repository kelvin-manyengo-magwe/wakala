import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { styles } from './styles';


interface MonthlyBarChartProps {
        transactionCount: number,
    }

export const MonthlyBarChart = ({ transactionCount }: MonthlyBarChartProps) => {
  // Convert your static barData into dynamic monthlyData format
  const monthlyData = [
    {
      month: 'April',
      providers: [
        { name: 'Yas', value: 0 },
        { name: 'M-Pesa', value: 0 },
        { name: 'Halotel', value: 30 },
        { name: 'Airtel', value: 0 }
      ]
    },
    {
      month: 'May',
      providers: [
        { name: 'Yas', value: 0 },
        { name: 'M-Pesa', value: 0 },
        { name: 'Halotel', value: transactionCount },
        { name: 'Airtel', value: 0 }
      ]
    }
  ];


  // Color mapping for providers
  const providerColors = {
    'Yas': '#e6bcbc',
    'M-Pesa': '#e60000',
    'Halotel': '#f7c7c7',
    'Airtel': '#f15b5b'
  };

  // Generate bar data in the required format
  const generateBarData = () => {
    return monthlyData.flatMap((monthData, monthIndex) => {
      return monthData.providers.map((provider, providerIndex) => ({
        value: provider.value,
        label: providerIndex === 0 ? monthData.month : '',
        frontColor: providerColors[provider.name],
        spacing: providerIndex === monthData.providers.length - 1 ? 20 : 2,
        labelTextStyle: { color: 'gray' },
        labelWidth: 30
      }));
    });
  };

  const barData = generateBarData();

  // Generate legend items
  const renderLegend = () => {
    return (
      <View style={styles.legendWrapper}>
        {monthlyData[0].providers.map(provider => (
          <View key={provider.name} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: providerColors[provider.name] }]} />
            <Text style={styles.legendText}>{provider.name}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.chartTitle}>Chati ya Jumla ya miamala kwa mwezi</Text>
      {renderLegend()}

             {/* Y-axis Label */}
                              <View style={{ alignItems: 'center', marginRight: 5 }}>
                                <Text
                                  style={styles.xAxisLabel}>
                                  Jumla ya miamala
                                </Text>
                              </View>

      <BarChart
        data={barData}
        barWidth={20}
        spacing={40}
        barBorderRadius={4}
        isAnimated
        yAxisColor="#ccc"
        xAxisColor="#000"
        noOfSections={5}
        maxValue={60}
        stepValue={10}
        xAxisLabelTextStyle={{ color: '#000', fontSize: 12 }}
        initialSpacing={20}
        showVerticalLines
        verticalLinesColor="rgba(0,0,0,0.1)"
        verticalLinesSpacing={monthlyData[0].providers.length * (10 + 8)}
      />
    </View>
  );
};