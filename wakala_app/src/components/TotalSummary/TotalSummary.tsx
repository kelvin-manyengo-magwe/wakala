import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export const { width } = Dimensions.get("window");
export const totalSummaryHeight = width * 0.5;
export const totalSummaryWidth = width * 0.9;

    export const TotalSummary = () => {


            return (
                    <View style={styles.summaryContainer}>
                            <View style={styles.leftSide}>
                                    <View style={styles.infoContainer}>
                                            <FontAwesome name="bank" size={20} />

                                            <View style={styles.infoColumn}>
                                                   <Text style={styles.label}>Deposits</Text>
                                                   <Text style={styles.amount}>120,000 Tzshs</Text>
                                            </View>
                                    </View>

                                    <View style={styles.infoContainer}>
                                            <FontAwesome name="percent" size={20} />

                                            <View style={styles.infoColumn}>
                                                   <Text style={styles.label}>Kamisheni</Text>
                                                   <Text style={styles.amount}>20,000 Tzshs</Text>
                                            </View>
                                    </View>
                            </View>

                            <View style={styles.rightSide}>

                            </View>
                    </View>

            )
    };

