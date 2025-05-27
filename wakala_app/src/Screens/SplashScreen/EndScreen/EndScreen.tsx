import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styles } from './styles';


export const EndScreen = ({ navigation }: { navigation: any }) => {

  return (
            <SafeAreaView style={styles.container}>
                      <View style={styles.content}>


                                <Image source={ require('../../../../assets/images/icons/wakala-fraud.jpg') } style={styles.image} />

                                {/* Feature list */}
                                <View style={styles.featureContainer}>
                                          <Text style={styles.featureText}>Zuia hasara na wizi</Text>

                                          <Text style={styles.featureText}>Boresha mapato</Text>
                                </View>

                                {/* CTA Button */}
                                <View style={styles.ctaContainer}>
                                        <TouchableOpacity
                                                 style={styles.ctaButton} onPress={() => navigation.navigate('Login')}>
                                                 <Text style={styles.ctaText}>Anza sasa</Text>
                                       </TouchableOpacity>
                                </View>
                      </View>
            </SafeAreaView>
  );
};

