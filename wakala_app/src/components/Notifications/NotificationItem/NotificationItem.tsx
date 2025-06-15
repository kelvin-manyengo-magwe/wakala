import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NotificationAvatar } from '../NotificationAvatar/NotificationAvatar'; // Adjust path if needed
import { format, parseISO } from 'date-fns'; // For date formatting
import { sw } from 'date-fns/locale';

export interface NotificationData {
    id: string;
    title: string; // Or just 'message' if title isn't distinct
    message: string; // The main content of the notification
    timestamp: string; // ISO 8601 date string ideally
    senderInitial?: string; // e.g., 'Y' for 'Your account', 'K' for 'KFC'
    avatarColor?: string; // Specific color for this notification's avatar
    read?: boolean; // Optional: if you want to style read/unread items
    onPress?: () => void;
}

interface NotificationItemProps {
    item: NotificationData;
    isLastItem?: boolean; // To avoid drawing separator for the last item
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ item, isLastItem }) => {

    const formattedTimestamp = () => {
        try {
            // e.g of date in sw "14 Juni 2025, 7:08 PM"
            return format(parseISO(item.timestamp), "d MMMM yyyy, h:mm aa", {
                locale: sw,
            });
        } catch (e) {
            console.warn("Error formatting timestamp:", item.timestamp, e);
            return item.timestamp;
        }
    };


    return (
        <TouchableOpacity
            style={[
                styles.itemContainer,
                !item.read && styles.unreadItem, // Optional styling for unread items
                isLastItem && styles.lastItemContainer // No bottom border for last item
            ]}
            onPress={item.onPress}
            activeOpacity={item.onPress ? 0.7 : 1}
        >
            <NotificationAvatar
                letter={item.senderInitial || item.title.charAt(0) || '?'}
                backgroundColor={item.avatarColor}
            />
            <View style={styles.textContainer}>
                {/* If you have a distinct title and message: */}
                {/* <Text style={[styles.title, !item.read && styles.unreadText]}>{item.title}</Text> */}
                <Text
                    style={[styles.message, !item.read && styles.unreadText]}
                    numberOfLines={3} // Adjust as needed
                    ellipsizeMode="tail"
                >
                    {item.message}
                </Text>
                <Text style={styles.timestamp}>{formattedTimestamp()}</Text>
            </View>
        </TouchableOpacity>
    );
};
