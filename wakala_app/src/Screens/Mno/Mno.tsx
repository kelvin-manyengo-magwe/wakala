import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { styles } from './styles';
import { PieChart3D } from '../../components/Graphs/PieChart3D/PieChart3D';
import { MnoServicePanel } from '../../components/MnoServicePanel/MnoServicePanel';
import { TransactionList } from '../../components/TransactionList/TransactionList';
import { TransactionTypeToggle } from '../../components/TransactionTypeToggle/TransactionTypeToggle';




export const Mno = () => {

    const [selectedTab, setSelectedTab] = useState<'weka' | 'toa'>('weka');
    const [selectedMno, setSelectedMno] = useState<string>('vodacom');



        return (

                    <View style={styles.container}>

                            <View style={styles.topSection}>
                                       {/*   to be shown later
                                                <View style={styles.pieChart3DContainer}>
                                                        <PieChart3D />
                                               </View>
                                           */}

                                        <View style={styles.mnoServicePanelContainer}>
                                                <MnoServicePanel selectedMno={selectedMno}
                                                                 setSelectedMno={setSelectedMno} />
                                        </View>
                            </View>

                                    <View style={styles.transactionTypeToggleContainer}>
                                            <TransactionTypeToggle selectedTab={selectedTab} onTabChange={setSelectedTab} />
                                    </View>

                                <View style={{ flex: 1 }}>

                                             <TransactionList selectedTab={selectedTab} selectedMno={selectedMno} />

                                        </View>




                    </View>

            )
    }

