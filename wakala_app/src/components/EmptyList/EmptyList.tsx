import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { emptyProps } from './types';
import { styles } from './styles';

//showing empty icon receipt and words for better UI
export const EmptyList: React.FC<emptyProps> = ({ selectedTab } : emptyProps) => {

            return (
                    <View style={styles.emptyContainer}>
                                  <Ionicons name="receipt" size={48} color="#CCCCCC" />

                                  <Text style={styles.emptyText}>
                                    {`Hakuna miamala ya ${selectedTab === 'weka' ? 'kuweka' : 'kutoa'} pesa`}
                                  </Text>
                    </View>
                )
    }