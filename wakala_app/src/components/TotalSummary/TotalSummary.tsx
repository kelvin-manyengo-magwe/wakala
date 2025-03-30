import { View, Text, Dimensions, SafeAreaV7iew } from 'react-native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export const { width } = Dimensions.get("window");
export const totalSummaryHeight = width * 0.5;
export const totalSummaryWidth = width * 0.9;

    export const TotalSummary = () => {


            return (
                    <View style={styles.totalSummarySpace}>
                        <Text style={styles.summaryHeading}>Muhtasari wa jumla wa leo</Text>

                            <View style={styles.summaryContainer}>
                                    <View style={styles.leftSide}>
                                            <View style={styles.infoContainer}>
                                                    <FontAwesome name="bank" size={24} />

                                                    <View style={styles.infoColumn}>
                                                           <Text style={styles.label}>Amana</Text>
                                                           <Text style={styles.amount}>120,000 Tzshs</Text>
                                                    </View>
                                            </View>

                                            <View style={styles.infoContainer}>
                                                    <FontAwesome name="percent" size={24} />

                                                    <View style={styles.infoColumn}>
                                                           <Text style={styles.label}>Kamisheni</Text>
                                                           <Text style={styles.amount}>78,349 Tzshs</Text>
                                                    </View>
                                            </View>
                                    </View>

                                    <View style={styles.rightSide}>
                                              <View style={styles.infoContainer}>
                                                    <FontAwesome name="money" size={24} />

                                                           <View style={styles.infoColumn}>
                                                                   <Text style={styles.label}>Matoleo ya Pesa</Text>
                                                                   <Text style={styles.amount}>3,230 Tzshs</Text>
                                                           </View>
                                              </View>

                                              <View style={styles.infoContainer}>
                                                    <FontAwesome name="balance-scale" size={24} />

                                                          <View style={styles.infoColumn}>
                                                                  <Text style={styles.label}>Salio</Text>
                                                                  <Text style={styles.amount}>45,610 Tzshs</Text>
                                                          </View>
                                              </View>
                                    </View>
                            </View>
                    </View>
            )
    };

