import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming use
import { NotificationItem, NotificationData } from '../../components/NotificationItem/NotificationItem';
import styles from './styles';




const SAMPLE_NOTIFICATIONS: NotificationData[] = [
    { id: '1', senderInitial: 'Y', title: 'Account Status', message: 'Your account has been created Successfully', timestamp: '2025-06-14T19:08:00Z', avatarColor: '#81C784', read: false, onPress: () => console.log("Notification 1 pressed") },
    { id: '2', senderInitial: 'B', title: 'Special Offer', message: 'Buy a Tikka Pizza from Meera Pizza and get one FREE. BOGOF all weekend. Tasty, easy, and totally worth it!', timestamp: '2025-06-11T17:04:00Z', avatarColor: '#64B5F6', read: true, onPress: () => console.log("Notification 2 pressed") },
    { id: '3', senderInitial: 'K', title: 'Restaurant Update', message: 'KFC Shekilango is now on duka.direct! Get crispy favorites delivered to your door. Order now and taste the crunch! 🔥', timestamp: '2025-06-11T17:04:00Z', avatarColor: '#FF8A65', read: false },
    { id: '4', senderInitial: 'O', title: 'Food Deal', message: "Order a burger at Patio and get FREE chips with your meal! Don't miss out!", timestamp: '2025-06-11T17:04:00Z', avatarColor: '#9575CD', read: true },
    { id: '5', senderInitial: 'M', title: 'Beverage Ad', message: "Mwagilia moyo na kinywaji chako pendwa kutoka Serengeti. Agiza sasa uletewe popote ulipo bila gharama yoyote ya usafiri.", timestamp: '2025-06-11T17:04:00Z', avatarColor: '#4DB6AC' },
    { id: '6', senderInitial: 'K', title: 'Restaurant Update', message: "Kookoos Sinza is now on duka.direct! Order from your nearest branch and enjoy delicious crispy meals delivered right to your door. Indulge today!", timestamp: '2025-06-11T17:04:00Z', avatarColor: '#FFB74D' },
    { id: '7', senderInitial: 'D', title: 'Food Variety', message: "Dar Fish Market is now on duka.direct! Enjoy signature sushi and delicious dishes like beef ribs, fish & chips, pasta, burgers, pizza & more. Order now and savor the flavors you love!", timestamp: '2025-06-11T17:04:00Z', avatarColor: '#E57373' },
    { id: '8', senderInitial: 'S', title: 'Grocery Offer', message: "Shop your household essentials from Kumahdi Mini Mart and enjoy free doorstep delivery! Get fresh eggs, cheese, coffee and more delivered with no extra cost. Order", timestamp: '2025-06-11T17:04:00Z', avatarColor: '#7986CB' },
];


export const Notifications = () => {
    const navigation = useNavigation();
    const [notifications, setNotifications] = useState<NotificationData[]>([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch notifications
    const fetchNotifications = async () => {
        setLoading(true);
        // TODO: Replace with your actual API call or Realm query
        // For example:
        // const realm = await getRealm();
        // const notificationObjects = realm.objects('Notification').sorted('timestamp', true);
        // const mappedNotifications = notificationObjects.map(n => ({...n, timestamp: n.timestamp.toISOString()}));
        // setNotifications(mappedNotifications);

        // Using sample data for now
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        setNotifications(SAMPLE_NOTIFICATIONS.sort((a, b) => parseISO(b.timestamp).getTime() - parseISO(a.timestamp).getTime())); // Sort newest first
        setLoading(false);
    };

    // Fetch notifications when the screen comes into focus
    useFocusEffect(
        useCallback(() => {
            fetchNotifications();
            // TODO: Potentially mark notifications as read when screen is viewed
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back-outline" size={28} color="#333333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
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

