import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';



type SalioCardProps = {
  title: string;
  balance: string;
};

export const SalioCard = ({ title, balance }: SalioCardProps) => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
              <Text style={styles.title}>{title}</Text>

              <View style={styles.balanceRow}>
                        <Text style={styles.balanceText}>
                          {isVisible ? balance : '••••••••'}
                        </Text>

                    <TouchableOpacity
                      onPress={() => setIsVisible(!isVisible)}
                      style={styles.eyeButton}>
                              <Icon
                                name={isVisible ? 'visibility' : 'visibility-off'}
                                size={24}
                                color="#3B82F6"/>
                    </TouchableOpacity>
              </View>
    </View>
  );
};

