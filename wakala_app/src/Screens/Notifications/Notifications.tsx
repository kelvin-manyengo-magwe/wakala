import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming use
import { NotificationItem, NotificationData } from '../../components/Notifications/NotificationItem/NotificationItem';
import styles from './styles';
import { getNotifications, markNotificationsAsRead } from '../../Services/Api/ApiService/NotificationService/NotificationService';





export const Notifications = () => {

    const navigation = useNavigation();
        const [notifications, setNotifications] = useState<NotificationData[]>([]);
        const [loading, setLoading] = useState(true);

        // This function now calls your real API
        const fetchNotifications = async () => {
            setLoading(true);
            try {
                // Get data from the API instead of sample data
                const data = await getNotifications();
                setNotifications(data);

                // After fetching, tell the server to mark them as read.
                // We use a "fire and forget" approach here.
                await markNotificationsAsRead();

            } catch (error) {
                console.error("Failed to fetch notifications:", error);
                // Optionally set an error state to show in the UI
            } finally {
                setLoading(false);
            }
        };

        // useFocusEffect is perfect for this. It runs when the screen is viewed.
        useFocusEffect(
            useCallback(() => {
                fetchNotifications();
            }, [])
        );

    const renderItem = ({ item, index }: { item: NotificationData, index: number }) => (
        <NotificationItem
            item={item}
            isLastItem={index === notifications.length - 1}
        />
    );

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Ionicons name="notifications-off-outline" size={60} color="#B0B0B0" />
            <Text style={styles.emptyText}>Hakuna taarifa mpya kwa sasa.</Text>
            <Text style={styles.emptySubText}>Endelea kuangalia tena baadaye.</Text>
        </View>
    );


    return (
        <View style={styles.container}>
            {/* Custom Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Nyumbani')} style={styles.backButton}>
                    <Ionicons name="arrow-back-outline" size={28} color="#333333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Taarifa</Text>
                <View style={styles.headerRightPlaceholder} />
                {/* Placeholder to balance title if back button takes space */}
            </View>

            {loading && notifications.length === 0 ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#E63946" />
                    <Text style={styles.loadingText}>Inapakia taarifa...</Text>
                </View>
            ) : (
                <FlatList
                    data={notifications}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={ListEmptyComponent}
                    // Optional: For pull-to-refresh
                    // refreshing={refreshing}
                    // onRefresh={handleRefresh}
                />
            )}
        </View>
    );
};

