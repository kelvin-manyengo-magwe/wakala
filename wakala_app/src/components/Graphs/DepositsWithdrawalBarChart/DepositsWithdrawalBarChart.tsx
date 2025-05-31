import { BarChart } from 'react-native-gifted-charts';
import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { HomeCalculatorSummary } from '../../Services/Database/models/HomeCalculatorSummary';


//props for totalDeposits and totalWithDrawals
interface ChartProps {
  airtelDeposits: number;
  airtelWithdrawals: number;
  halotelDeposits: number;
  halotelWithdrawals: number;
}

export const DepositsWithdrawalBarChart: React.FC<ChartProps> = ({ airtelDeposits, airtelWithdrawals,
                                                                     halotelDeposits, halotelWithdrawals, }: ChartProps) => {

            //making the useState function

                    const barData = [
                            {
                              value: 0,
                              label: 'Yas',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 0, frontColor: '#ED6665'},
                            {
                              value: 0,
                              label: 'M-Pesa',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 0, frontColor: '#ED6665'},
                            {
                                  value: airtelDeposits / 1000,
                                  label: 'Airtel',
                                  spacing: 2,
                                  labelWidth: 35,
                                  labelTextStyle: { color: 'black' },
                                  frontColor: '#177AD5',
                                },
                                {
                                  value: airtelWithdrawals / 1000,
                                  frontColor: '#ED6665',
                                },
                                {
                                  value: halotelDeposits / 1000,
                                  label: 'Halotel',
                                  spacing: 2,
                                  labelWidth: 40,
                                  labelTextStyle: { color: 'black' },
                                  frontColor: '#177AD5',
                                },
                                {
                                  value: halotelWithdrawals / 1000,
                                  frontColor: '#ED6665',
                                },

                          ];


               {/*
                        const maxYValue = Math.max(
                                          airtelDeposits,
                                          airtelWithdrawals,
                                          halotelDeposits,
                                          halotelWithdrawals,
                                          50000
                                        );
                   */}

            //const roundedMax = Math.ceil(maxYValue / 50000) * 50;

            //const roundedMax = '200K'; // Since values are divided by 100 (200K ÷ 100)


                      const renderTitle = () => {
                                return(
                                  <View style={styles.legendContainer}>
                                          <Text style={styles.legendText}>
                                                    Chati ya Kuweka pesa dhidi ya Kutoa pesa kwa Mwezi
                                          </Text>
                                          <View style={styles.uondoajiAmanaContainer}>
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                              <View style={{backgroundColor: '#177AD5', height: 12, width: 12, borderRadius: 6, marginRight: 8, }} />
                                                                    <Text style={{ width: 60, height: 16, }}>
                                                                        Kuweka pesa
                                                                    </Text>
                                                    </View>

                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                                    <View style={styles.uondoajiContainer} />
                                                              <Text style={styles.uondoajiText}>
                                                                    Kutoa pesa
                                                              </Text>
                                                    </View>

                                          </View>
                                </View>
                                )
                            }

            return (
                    <View
                            style={{marginBottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBottom: 40, borderRadius: 10, marginHorizontal: 10, }}>
                                    <View>
                                            {renderTitle()}
                                    </View>

                                    <View>
                                            <BarChart data={barData}
                                                      barWidth={20} spacing={24} roundedTop roundedBottom
                                                      hideRules xAxisThickness={0} yAxisThickness={0}
                                                      yAxisTextStyle={{color: 'black'}}
                                                      noOfSections={4}
                                                      xAxisThickness={1}
                                                      yAxisThickness={1}
                                                      //maxValue={roundedMax} // Rounds up to nearest 50K
                                                      yAxisLabelTexts={['0', '50K', '100K', '150K', '200K']}

                                                      />
                                    </View>
                    </View>
                )
    };