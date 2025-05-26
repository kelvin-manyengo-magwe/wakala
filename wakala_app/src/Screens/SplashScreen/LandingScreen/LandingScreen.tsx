import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>

                <Text style={styles.title}>Changanua</Text>
          </View>

          <View style={styles.content}>
                {/* This would contain the actual dashboard content */}
                <Text style={styles.welcomeText}>Karibu kwenye mfumo wetu</Text>
          </View>
    </SafeAreaView>
  );
};
