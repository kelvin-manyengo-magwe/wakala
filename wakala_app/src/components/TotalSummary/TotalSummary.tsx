import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import { styles } from './styles';



export const { width } = Dimensions.get("window");
export const totalSummaryHeight = width * 0.5;
export const totalSummaryWidth = width * 0.5;

    export const TotalSummary = () => {


            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.summaryParentContainer}>
                            <View style={styles.summaryContainer}>

                            </View>
                    </View>

                </SafeAreaView>
            )
    }
