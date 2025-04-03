import { Text, View, Image } from 'react-native';
import { styles } from './styles';


export const MnoServicePanel = () => {

        return (
                <View>
                        <Text style={styles.headerText}>Orodha ya mitandao</Text>

                        <View style={styles.mnoContainer}>
                                    <View style={styles.mnoUpperRow}>
                                            <View style={styles.mnoLogoContainer}>
                                                    <Image resizeMode="cover" style={styles.mnoLogo} source={ require('../../../assets/images/icons/mpesa-logo.jpg') } />
                                            </View>

                                            <View style={styles.mnoLogoContainer}>
                                                     <Image resizeMode="cover" style={styles.mnoLogo} source={ require('../../../assets/images/icons/halo-pesa-logo.png') } />
                                            </View>

                                            <View style={styles.mnoLogoContainer}>
                                                     <Image resizeMode="cover" style={styles.mnoLogo} source={ require('../../../assets/images/icons/mixx-by-yas-logo.png') } />
                                            </View>
                                    </View>



                                    <View style={styles.mnoBottomRow}>
                                            <View style={styles.mnoLogoContainer}>
                                                    <Image resizeMode="cover" style={styles.mnoLogo} source={ require('../../../assets/images/icons/airtel-money-logo.png') } />
                                            </View>

                                            <View style={styles.mnoLogoContainer}>
                                                   <Image resizeMode="contain" style={styles.mnoLogo} source={ require('../../../assets/images/icons/t-pesa-logo.jpg') } />
                                            </View>
                                    </View>
                        </View>
                </View>
            )
    };