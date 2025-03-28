import { View, Text, Image } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';



    export const CardData = [
        {
              id: 1,
              content: (
                        <View style={styles.cardContent}>
                                <Text style={styles.cardText}>
                                    <SimpleLineIcons name="trophy" size={20} /> Mitandao inayofanya vizuri
                                </Text>

                                <Text style={styles.cardText}>
                                        <Image style={styles.mixxByYasLogo} source={ require("../../../assets/images/icons/mixx-by-yas-logo.png")} /> Tigo - miamala 50
                                </Text>
                                <Text style={styles.cardText}>
                                       <FontAwesome6 name="sack-dollar" size={20} /> Mapato : milioni 1.2 TZShs
                                </Text>

                                <Text style={styles.cardText}>
                                    <Foundation name="graph-trend" size={20} /> +15% kutoka jana
                                </Text>
                        </View>
              )
        },
        {
                  id: 2,
                  content: (
                            <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>
                                            <Fontisto name="person" size={20} /> Wateja Bora
                                    </Text>
                                    <Text style={styles.cardText}>
                                            <FontAwesome6 name="medal" size={20} /> Neema Shillingi - miamala 30
                                    </Text>
                                    <Text style={styles.cardText}>
                                            <FontAwesome name="money" size={20} /> Kiasi: 7,000,000 TZShs
                                    </Text>
                            </View>
                  )
        },
        {
                  id: 3,
                  content: (
                            <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>
                                        <Ionicons name="rocket-outline" size={20} /> Jumla ya miamala ya leo
                                    </Text>
                                    <Text style={styles.cardText}>
                                            Tigo - miamala 50
                                    </Text>

                                    <Text style={styles.cardText}>
                                        <Foundation name="graph-trend" size={20} /> +15% kutoka jana
                                    </Text>

                                    <Text style={styles.cardText}>
                                             <FontAwesome6 name="sack-dollar" size={20} /> Kiasi cha jumla: milion 3 TZShs
                                    </Text>
                            </View>
                  )
        },
        {
                  id: 4,
                  content: (
                            <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>
                                        <SimpleLineIcons name="trophy" size={20} /> Mitandao inayofanya vizuri
                                    </Text>
                                    <Text style={styles.cardText}>Tigo - miamala 50</Text>
                                    <Text style={styles.cardText}>
                                        <Foundation name="graph-trend" size={20} /> +15% kutoka jana
                                    </Text>
                            </View>
                  )
        },
        {
                  id: 5,
                  content: (
                            <View style={styles.cardContent}>
                                    <Text style={styles.cardText}>
                                        <SimpleLineIcons name="trophy" size={20} /> Mitandao inayofanya vizuri
                                    </Text>
                                    <Text style={styles.cardText}>Tigo - miamala 50</Text>
                                    <Text style={styles.cardText}>
                                        <Foundation name="graph-trend" size={20} /> +15% kutoka jana
                                    </Text>
                            </View>
                  )
            }
];