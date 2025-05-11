// PieLid3D.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { PieChart } from 'react-native-gifted-charts';


export const PieChart3D = () => {

        const pieData = [
            { value: 40, color: '#FF6384', text: 'Red' },
            { value: 30, color: '#36A2EB', text: 'Blue' },
            { value: 30, color: '#4BC0C0', text: 'Green' },
          ];

  return (
                <View style={{ flex: 1, alignItems: 'center' }}>
                          <Text style={{ marginBottom: 20, fontSize: 18, fontWeight: 'bold' }}>Simple Pie Chart</Text>
                                  <PieChart
                                    data={pieData}
                                    showText
                                    radius={90}
                                    textColor="white"
                                    innerRadius={60}
                                  />
                    </View>
  );
};