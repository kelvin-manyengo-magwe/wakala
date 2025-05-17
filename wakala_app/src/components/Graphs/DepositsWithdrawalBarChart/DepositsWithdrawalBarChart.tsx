import { BarChart } from 'react-native-gifted-charts';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { HomeCalculatorSummary } from '../../Services/Database/models/HomeCalculatorSummary';


//props for totalDeposits and totalWithDrawals
interface ChartProps {
    totalDeposits: number;
    totalWithdrawals: number;
}

export const DepositsWithdrawalBarChart = ({ totalDeposits, totalWithdrawals }: ChartProps) => {

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
                              value: 0,
                              label: 'Airtel money',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 0, frontColor: '#ED6665'},
                            {
                              value: totalDeposits / 1000,
                              label: 'Halopesa',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: totalWithdrawals / 1000, frontColor: '#ED6665'},
                            {
                              value: 0,
                              label: 'TTCL',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 0, frontColor: '#ED6665'},
                          ];

                      const renderTitle = () => {
                                return(
                                  <View style={styles.legendContainer}>
                                          <Text style={styles.legendText}>
                                                    Chati ya Amana dhidi ya Uondoaji kwa Mwezi
                                          </Text>
                                          <View style={styles.uondoajiAmanaContainer}>
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                              <View style={{backgroundColor: '#177AD5', height: 12, width: 12, borderRadius: 6, marginRight: 8, }} />
                                                                    <Text style={{ width: 60, height: 16, }}>
                                                                        Amana
                                                                    </Text>
                                                    </View>

                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                                    <View style={styles.uondoajiContainer} />
                                                              <Text style={styles.uondoajiText}>
                                                                    Uondoaji
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
                                                      barWidth={16} spacing={24} roundedTop roundedBottom
                                                      hideRules xAxisThickness={0} yAxisThickness={0}
                                                      yAxisTextStyle={{color: 'black'}} noOfSections={5}
                                                      maxValue={Math.max(totalDeposits / 1000, 10)}
                                                      xAxisThickness={1}
                                                      yAxisThickness={1}
                                                      maxValue={Math.ceil((totalDeposits / 1000) / 50) * 50} // Rounds up to nearest 50K
                                                      yAxisLabelTexts={Array.from({length: 6}, (_, i) => `${i * 50}K`)}
                                                      />
                                    </View>
                    </View>
                )
    };