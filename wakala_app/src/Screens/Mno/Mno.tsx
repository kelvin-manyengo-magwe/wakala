import { View, Text, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { styles } from './styles';
import { PieChart3D } from '../../components/Graphs/PieChart3D/PieChart3D';
import { MnoServicePanel } from '../../components/MnoServicePanel/MnoServicePanel';
import { TransactionList } from '../../components/TransactionList/TransactionList';
import { TransactionTypeToggle } from '../../components/TransactionTypeToggle/TransactionTypeToggle';




export const Mno = () => {

    const [selectedTab, setSelectedTab] = useState<'weka' | 'toa'>('weka');
      const flatListRef = useRef(null);
      const [headerHeight, setHeaderHeight] = useState(0);

      // Your transaction data
      const [transactions, setTransactions] = useState([]);



        return (
            <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                          showsVerticalScrollIndicator={false}
                >
                    <View style={styles.container}>

                            <View style={styles.topSection}>
                                        <View style={styles.pieChart3DContainer}>
                                                        <PieChart3D />

                                        </View>

                                        <View style={styles.mnoServicePanelContainer}>
                                                <MnoServicePanel />
                                        </View>
                            </View>

                            <View style={styles.transactionTypeToggleContainer}>
                                     <TransactionTypeToggle
                                            onTabChange={setSelectedTab}
                                            selectedTab={selectedTab}
                                      />
                            </View>

                                <View style={{ flex: 1, }}>
                                        {/*Each transaction corresponding to the wakati and muamala*/}
                                        <TransactionList />
                                </View>




                    </View>
            </ScrollView>
            )
    }

