import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { styles } from './styles';
import { PieChart3D } from '../../components/Graphs/PieChart3D/PieChart3D';
import { MnoServicePanel } from '../../components/MnoServicePanel/MnoServicePanel';
import { TransactionList } from '../../components/TransactionList/TransactionList';
import { TransactionTypeToggle } from '../../components/TransactionTypeToggle/TransactionTypeToggle';




export const Mno = () => {

    const [selectedTab, setSelectedTab] = useState<'weka' | 'toa'>('weka');


        return (
                    <View style={styles.container}>

                            <View style={styles.topSection}>
                                        <View style={styles.pieChart3DContainer}>
                                                        <PieChart3D />

                                        </View>

                                        <View style={styles.mnoServicePanelContainer}>
                                                <MnoServicePanel />
                                        </View>
                            </View>

                            <View>
                                     <TransactionTypeToggle
                                            onTabChange={setSelectedTab}
                                            selectedTab={selectedTab}
                                      />
                            </View>

                                <View>
                                        {/*Each transaction corresponding to the wakati and muamala*/}
                                        <TransactionList />
                                </View>




                    </View>
            )
    }

