import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styles } from './styles';


export const EndScreen = ({ navigation }: { navigation: any }) => {

  return (
            <SafeAreaView style={styles.container}>
                      <View style={styles.content}>


                                {/* App name/logo would go here */}
                                <Text style={styles.appName}>Changanua</Text>

                                {/* Feature list */}
                                <View style={styles.featureContainer}>
                                          <Text style={styles.featureText}>fuatilia mzunguko wa pesa kwa urahisi kwa kutumia wakala app</Text>
                                          <View style={styles.divider} />

                                          <Text style={styles.featureText}>Zuia hasara na wizi</Text>
                                          <View style={styles.divider} />

                                          <Text style={styles.featureText}>Boresha mapato</Text>
                                </View>

                                {/* CTA Button */}
                                <TouchableOpacity
                                    style={styles.ctaButton} onPress={() => navigation.navigate('Home')}>
                                            <Text style={styles.ctaText}>Anza sasa</Text>
                                </TouchableOpacity>
                      </View>
            </SafeAreaView>
  );
};

