import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';




interface NotificationAvatarProps {
    letter: string;
    backgroundColor?: string; // Optional: to vary avatar colors
    size?: number;
}

const defaultAvatarColors = [
    '#A0D2DB', '#E57373', '#81C784', '#64B5F6', '#FFD54F',
    '#BA68C8', '#FF8A65', '#4DB6AC', '#9575CD', '#7986CB'
];

export const NotificationAvatar: React.FC<NotificationAvatarProps> = ({
    letter,
    backgroundColor,
    size = 40
}) => {
    // Fallback color logic if specific backgroundColor isn't provided
    const charCodeSum = letter.charCodeAt(0) || 0; // Use first letter's char code
    const colorIndex = charCodeSum % defaultAvatarColors.length;
    const bgColor = backgroundColor || defaultAvatarColors[colorIndex];

    return (
        <View style={[styles.avatarContainer, { width: size, height: size, borderRadius: size / 2, backgroundColor: bgColor }]}>
            <Text style={[styles.avatarLetter, { fontSize: size * 0.45 }]}>
                {letter ? letter.charAt(0).toUpperCase() : '?'}
            </Text>
        </View>
    );
};

