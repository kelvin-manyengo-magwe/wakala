import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export const Settings = () => {
  const settingsOptions = [
    {
      title: 'Badili mwanga',
      icon: '☀️',
      onPress: () => console.log('Change theme pressed')
    },
    {
      title: 'Badili mwandiko',
      icon: '✏️',
      onPress: () => console.log('Change font pressed')
    },
    {
      title: 'Badili lugha',
      icon: '🌐',
      onPress: () => console.log('Change language pressed')
    },
    {
      title: 'Mawasiliano',
      icon: '📞',
      onPress: () => console.log('Contact pressed')
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tarifa</Text>

      <ScrollView style={styles.scrollContainer}>
        {settingsOptions.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionItem}
            onPress={item.onPress}
          >
            <Text style={styles.optionIcon}>{item.icon}</Text>
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  optionIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

