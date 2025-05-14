import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';


export const DailyBarChart = () => {
  const barData = [
    { value: 0, label: 'mpesa', frontColor: '#e60000' },
    { value: 0, label: 'airtel', frontColor: '#f15b5b' },
    { value: 90, label: 'halotel', frontColor: '#f7c7c7' },
    { value: 0, label: 'yas', frontColor: '#e6bcbc' },
  ];

  return (
    <View style={styles.container}>

            {/* Y-axis arrow */}
                  <Icon name="arrow-up" size={16} color="#000" style={styles.yArrow} />

                  {/* X-axis arrow */}
                  <Icon name="arrow-forward" size={16} color="#000" style={styles.xArrow} />

      <BarChart
        barWidth={35}
        barBorderRadius={8}
        frontColor="red"
        data={barData}
        yAxisThickness={1}
        xAxisLabelTextStyle={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}
        xAxisThickness={1}
        noOfSections={4}
        maxValue={100}
        spacing={30}
        isAnimated
        hideYAxisText
        yAxisTextStyle={{ color: 'gray' }}
        xAxisLabelVerticalShift={6}
        stepValue={25}
      />
    </View>
  );
};


