import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface DailyBarChartProps {
    transactionCount: number,
    }

export const DailyBarChart = ({ transactionCount }: DailyBarChartProps) => {
  const barData = [
    { value: 0, label: 'mpesa', frontColor: '#e60000', showValue: true },
    { value: 0, label: 'airtel', frontColor: '#f15b5b', showValue: true },
    { value: transactionCount, label: 'halotel', frontColor: '#f7c7c7', showValue: true },
    { value: 0, label: 'yas', frontColor: '#e6bcbc', showValue: true },
  ];

  return (
    <View style={styles.container}>

            {/* Y-axis Label */}
                  <View style={{ alignItems: 'center', marginRight: 5 }}>
                    <Text
                      style={styles.xAxisLabel}>
                      Jumla ya miamala
                    </Text>
                  </View>



                  {/* X-axis arrow */}
                  <Icon name="arrow-forward" size={16} color="#000" style={styles.xArrow} />

      <BarChart
        barWidth={35}
        barBorderRadius={8}

        data={barData}
        yAxisThickness={1}
        xAxisLabelTextStyle={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}
        xAxisThickness={1}
        noOfSections={5}
        maxValue={100}
        spacing={30}
        isAnimated
        yAxisTextStyle={{ color: 'gray' }}
        xAxisLabelVerticalShift={6}
        stepValue={10}
        showValuesOnTopOfBars={true}
        valueTextStyle={{ fontSize: 12, color: 'black', fontWeight: 'bold' }}
      />
    </View>
  );
};


