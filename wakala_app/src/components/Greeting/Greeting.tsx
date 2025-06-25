import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getUserData, UserData } from '../../Services/Storage/authStorage';
import Ionicons from 'react-native-vector-icons/Ionicons'; // We'll add an icon
import styles from './styles';



const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    return 'Habari za asubuhi'; // Good morning
  }
  if (currentHour < 18) {
    return 'Habari za mchana'; // Good afternoon
  }
  return 'Habari za jioni'; // Good evening
};


export const Greeting = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const greetingText = getGreeting();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserData();
      if (user) {
        setUserData(user);
      }
    };
    fetchUser();
  }, []);

  const displayName = userData?.name ? userData.name : 'Wakala';

  return (
    <View style={styles.container}>
      {/* Sun or Moon Icon based on time */}
      <Ionicons
        name={greetingText === 'Habari za jioni' ? 'moon-outline' : 'sunny-outline'}
        size={26}
        color="#FFA500" // A warm orange/yellow color
        style={styles.icon}
      />
      <View>
        <Text style={styles.greetingMessage}>{greetingText},</Text>
        <Text style={styles.userName}>{displayName}</Text>
      </View>
    </View>
  );
};

