import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { styles } from './styles';
import { PieChart3D } from '../../components/Graphs/PieChart3D/PieChart3D';
import { MnoServicePanel } from '../../components/MnoServicePanel/MnoServicePanel';






export const Mno = () => {


        return (
                    <View style={styles.container}>
                                <View style={{  flex: 1, height: '25%', width: '100%', alignItems: 'center', borderWidth: 1, marginVertical: 10, }}>

                                                <PieChart3D />

                                </View>

                                <View style={{ flex: 1, width: '100%', borderWidth: 1, }}>
                                        <MnoServicePanel />
                                </View>

                                <View>
                                        {/*Each transaction corresponding to the wakati and muamala*/}


                                </View>
                    </View>
            )
    }

