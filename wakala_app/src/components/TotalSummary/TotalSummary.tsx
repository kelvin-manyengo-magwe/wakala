import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeTotalMnoSummary } from '../../Screens/Home/Home.types';
import { HomeCalculatorSummary } from '../../Services/Database/models/HomeCalculatorSummary';
import { getRealm } from '../../Services/Database/Realm/Realm';
import { TransactionsSchema } from '../../Services/Database/Schemas/TransactionsSchema';



export const { width } = Dimensions.get("window");
export const totalSummaryHeight = width * 0.4;
export const totalSummaryWidth = width * 0.9;

    export const TotalSummary = () => {
        const [ mnoTotalSummary, setMnoTotalSummary ] = useState<HomeTotalMnoSummary>({  //making the type T for the interfaces
                    totalDeposits: 0,
                    totalWithdrawals: 0,
                    totalCommission: 0,
                    totalFloat: 0,
            });


        useEffect(() => {
                    let realmInstance: Realm;

                const loadSummary = async() => {
                            realmInstance = await getRealm();
                            const transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');

                            //initially load the data
                        const summary = await HomeCalculatorSummary();
                                setMnoTotalSummary(summary);

                        transactions.addListener(async (collection, changes) => {
                                    console.log('Realm Change detected 🚀');
                                    console.log('New Size: ', collection.length);

                                    const updatedSummary = await HomeCalculatorSummary();
                                    setMnoTotalSummary(updatedSummary);
                            });
                    };

                        loadSummary();

                            return () => {
                                        if(realmInstance && !realmInstance.isClosed) {
                                                const transactions = realmInstance.objects<TransactionsSchema>('deposits_transaction');
                                                    transactions.removeAllListeners();  //closing the listeners
                                                        realmInstance.close();          //closing the realm database schema
                                            }
                                }
            },[]);


            return (
                    <View style={styles.totalSummarySpace}>
                        <Text style={styles.summaryHeading}>Muhtasari wa jumla wa leo</Text>

                            <View style={styles.summaryContainer}>
                                    <View style={styles.leftSide}>
                                            <View style={styles.infoContainer}>
                                                    <FontAwesome name="bank" size={24} />

                                                    <View style={styles.infoColumn}>
                                                           <Text style={styles.label}>Amana</Text>
                                                           <Text style={styles.amount}>{mnoTotalSummary.totalDeposits} Tzshs</Text>
                                                    </View>
                                            </View>

                                            <View style={styles.infoContainer}>
                                                    <FontAwesome name="percent" size={24} />

                                                    <View style={styles.infoColumn}>
                                                           <Text style={styles.label}>Kamisheni</Text>
                                                           <Text style={styles.amount}>{mnoTotalSummary.totalCommission} Tzshs</Text>
                                                    </View>
                                            </View>
                                    </View>

                                    <View style={styles.rightSide}>
                                              <View style={styles.infoContainer}>
                                                    <FontAwesome name="money" size={24} />

                                                           <View style={styles.infoColumn}>
                                                                   <Text style={styles.label}>Matoleo ya Pesa</Text>
                                                                   <Text style={styles.amount}>{mnoTotalSummary.totalWithdrawals} Tzshs</Text>
                                                           </View>
                                              </View>

                                              <View style={styles.infoContainer}>
                                                    <FontAwesome name="balance-scale" size={24} />

                                                          <View style={styles.infoColumn}>
                                                                  <Text style={styles.label}>Salio</Text>
                                                                  <Text style={styles.amount}>{mnoTotalSummary.totalFloat} TZshs</Text>
                                                          </View>
                                              </View>
                                    </View>
                            </View>
                    </View>
            )
    };

