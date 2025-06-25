import styles from './styles';

import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { axiosInstance } from '../../../Services/Api/ApiService/ApiService';
import { getUnreadNotificationCount } from '../../../Services/Api/ApiService/NotificationService/NotificationService';




export const NotificationBell = () => {
    const navigation = useNavigation();
    const [unreadCount, setUnreadCount] = useState(0);

    // This function fetches only the count of unread notifications
    const fetchUnreadCount = async () => {
            try {
                // Use the correctly exported function
                const count = await getUnreadNotificationCount();
                setUnreadCount(count);
            } catch (error) {
                // Error is already logged in the service, no need to log again
                setUnreadCount(0);
            }
        };

    // useFocusEffect will run this every time the screen becomes active
    useFocusEffect(
        useCallback(() => {
            fetchUnreadCount();
        }, [])
    );

    const navigateToNotifications = () => {
        // Navigate to the notifications screen
        navigation.navigate('Notifications'); // Make sure 'Notifications' is the correct route name
    };

    return (
        <TouchableOpacity onPress={navigateToNotifications} style={styles.container}>
            <Icon name="notifications-outline" size={26} color="#333" />
            {unreadCount > 0 && (
                <View style={styles.badgeContainer}>
                    <Text style={styles.badgeText}>{unreadCount}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};