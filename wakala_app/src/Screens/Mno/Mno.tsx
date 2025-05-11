import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { styles } from './styles';
import { PieChart3D } from '../../components/Graphs/PieChart3D/PieChart3D';







export const Mno = () => {


        return (
                    <View style={styles.container}>
                          <View style={styles.shadow}>
                                <PieChart3D />
                          </View>
                          {/* You might add a legend or other information below the chart */}
                    </View>
            )
    }

