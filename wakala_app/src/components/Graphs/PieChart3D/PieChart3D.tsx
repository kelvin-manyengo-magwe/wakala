// PieLid3D.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path , Image as SvgImage } from 'react-native-svg';
import { PieChart } from 'react-native-gifted-charts';



export const PieChart3D = () => {

        const pieData = [
            { value: 40, color: '#E3BEB4', text: 'Yas', logo: require('../../../../assets/images/icons/mixx-by-yas-logo.png') },
            { value: 30, color: '#DE6057', text: 'Airtel', logo: require('../../../../assets/images/icons/airtel-money-logo.png') },
            { value: 20, color: '#C22022', text: 'M-Pesa', logo: require('../../../../assets/images/icons/mpesa-logo.jpg') },
            { value: 10, color: '#EBCFC6', text: 'Halotel', logo: require('../../../../assets/images/icons/halo-pesa-logo.png') },
          ];

  return (
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                          <Text style={{ marginBottom: 20, fontSize: 18, fontWeight: 'bold' }}>M</Text>
                                  <PieChart
                                    data={pieData}
                                    showText
                                    showValuesAsPercentage
                                    radius={100}
                                    textColor="white"
                                    innerRadius={60}
                                    renderCustomLabel={(val) => (
                                              <SvgImage
                                                source={val.logo}
                                                style={{
                                                  width: 30,
                                                  height: 30,
                                                  position: 'absolute',
                                                  top: val.y - 15,
                                                  left: val.x - 15,
                                                }} />
                                        )} />
                    </View>
  );
};