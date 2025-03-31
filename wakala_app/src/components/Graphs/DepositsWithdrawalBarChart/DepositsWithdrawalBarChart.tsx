import { BarChart } from 'react-native-gifted-charts';
import { Text, View } from 'react-native';



export const DepositsWithdrawalBarChart = () => {
                    const barData = [
                            {
                              value: 40,
                              label: 'Yas',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 20, frontColor: '#ED6665'},
                            {
                              value: 50,
                              label: 'M-Pesa',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 40, frontColor: '#ED6665'},
                            {
                              value: 75,
                              label: 'Airtel money',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 25, frontColor: '#ED6665'},
                            {
                              value: 30,
                              label: 'Halopesa',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 20, frontColor: '#ED6665'},
                            {
                              value: 60,
                              label: 'TTCL',
                              spacing: 2,
                              labelWidth: 30,
                              labelTextStyle: {color: 'black'},
                              frontColor: '#177AD5',
                            },
                            {value: 40, frontColor: '#ED6665'},
                          ];

                      const renderTitle = () => {
                                return(
                                  <View style={{marginVertical: 20, alignItems: 'center',}}>
                                          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', }}>
                                                    Chati ya Amana dhidi ya Uondoaji
                                          </Text>
                                  <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10,}}>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                      <View style={{backgroundColor: '#177AD5', height: 12, width: 12, borderRadius: 6, marginRight: 8, }} />
                                                            <Text style={{ width: 60, height: 16, }}>
                                                                Amana
                                                            </Text>
                                                      </View>

                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                            <View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: '#ED6665', marginRight: 8, }} />
                                                      <Text style={{ width: 60, height: 16, }}>
                                                            Uondoaji
                                                      </Text>
                                            </View>
                                  </View>
                                </View>
                                )
                            }

            return (
                    <View
                            style={{
                                marginBottom: 20,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingBottom: 40,
                                borderRadius: 10,
                                marginHorizontal: 10,

                            }}>
                                    <View>
                                            {renderTitle()}
                                    </View>

                                    <View>
                                            <BarChart

                                                                                  data={barData}
                                                                                  barWidth={16}
                                                                                  spacing={24}
                                                                                  roundedTop
                                                                                  roundedBottom
                                                                                  hideRules
                                                                                  xAxisThickness={0}
                                                                                  yAxisThickness={0}
                                                                                  yAxisTextStyle={{color: 'black'}}
                                                                                  noOfSections={3}
                                                                                  maxValue={75}
                                                                                />
                                    </View>
                    </View>
                )
    };