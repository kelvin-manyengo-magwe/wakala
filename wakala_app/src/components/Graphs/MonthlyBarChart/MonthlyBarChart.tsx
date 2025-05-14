import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';



export const MonthlyBarChart = () => {
  const barData = [
    {
      label: 'january',
      mpesa: 80,
      airtel: 60,
      halotel: 30,
    },
    {
      label: 'februari',
      mpesa: 85,
      airtel: 60,
      halotel: 30,
    },
  ];

  const stackedData = barData.map(month => ({
    stacks: [
      { value: month.mpesa, color: '#e60000', label: 'mpesa' },
      { value: month.airtel, color: '#f27070', label: 'airtel' },
      { value: month.halotel, color: '#f0cccc', label: 'halotel' },
    ],
    label: month.label,
  }));

  return (
    <View style={{ padding: 16 }}>
      {/* Custom X and Y Axis Arrows */}
      <View style={styles.axisArrows}>
        <Icon name="arrow-right" size={24} color="black" style={styles.arrowX} />
        <Icon name="arrow-upward" size={24} color="black" style={styles.arrowY} />
      </View>

      {/* Y-Axis Label */}
      <Text style={styles.yAxisLabel}>No ya miamala</Text>

      <BarChart
        stackData={stackedData}
        barWidth={35}
        barBorderRadius={8}
        spacing={40}
        yAxisThickness={1}
        xAxisThickness={1}
        maxValue={100}
        noOfSections={4}
        stepValue={25}
        isAnimated
        xAxisLabelTextStyle={{
          fontWeight: 'bold',
          fontSize: 12,
        }}
        yAxisTextStyle={{
          color: 'gray',
          fontSize: 10,
        }}
        hideRules
      />
    </View>
  );
};

