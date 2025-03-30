import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import { styles } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export const { width } = Dimensions.get("window");
export const totalSummaryHeight = width * 0.5;
export const totalSummaryWidth = width * 0.9;

    export const TotalSummary = () => {


            return (
                            <View style={styles.summaryContainer}>

                            </View>

            )
    };

