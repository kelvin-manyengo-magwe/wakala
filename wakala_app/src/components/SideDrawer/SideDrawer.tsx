import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions,Modal, Image, Platform, Alert, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { clearAuthData, getUserData, UserData } from '../../Services/Storage/authStorage';
import styles from './styles';




const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8; // Drawer takes 80% of screen width

interface SideDrawerProps {
    isOpen: boolean;
    onClose: () => void;

}

interface DrawerItemProps {
    iconName: string;
    label: string;
    onPress?: () => void;
}

const DrawerItem: React.FC<DrawerItemProps> = ({ iconName, label, onPress }) => (
    <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
        <Ionicons name={iconName} size={24} color="#4A5568" style={styles.drawerItemIcon} />
        <Text style={styles.drawerItemLabel}>{label}</Text>
    </TouchableOpacity>
);

export const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
    const slideAnim = useRef(new Animated.Value(-DRAWER_WIDTH)).current; // Start off-screen to the left
    const navigation = useNavigation();
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        if (isOpen) {
            Animated.timing(slideAnim, {
                toValue: 0, // Slide to visible position
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: -DRAWER_WIDTH, // Slide back off-screen
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }, [isOpen, slideAnim]);

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await getUserData();
            setUserData(storedUser);
        };
        if (isOpen) { // Fetch user data when drawer opens
            fetchUser();
        }
    }, [isOpen]);


    const handleLogout = () => {
        onClose(); // Close the drawer first
        Alert.alert(
            "Thibitisha Kujiondoa",
            "Una uhakika unataka kujiondoa?",
            [
                { text: "Ghairi", style: "cancel" },
                {
                    text: "Ondoka",
                    style: "destructive",
                    onPress: async () => {
                        await clearAuthData();
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'LoginScreen' }], // Ensure LoginScreen is correct
                            })
                        );
                    },
                },
            ]
        );
    };

    const handleUpdateProfile = () => {
        onClose();
        // navigation.navigate('EditProfileScreen'); // Navigate to an Edit Profile screen
        Alert.alert("Sasisha Wasifu", "Kipengele hiki kinakuja hivi karibuni!");
    };

    if (!isOpen && slideAnim._value === -DRAWER_WIDTH) { // Don't render Modal if fully closed and not animating
        return null;
    }

    return (
        <Modal
            transparent={true}
            visible={isOpen} // Control visibility with isOpen prop
            animationType="none" // We handle animation manually
            onRequestClose={onClose} // For Android back button
        >
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1}
                onPress={onClose} // Close drawer if overlay is tapped
            >
                <Animated.View
                    style={[
                        styles.drawerContainer,
                        { transform: [{ translateX: slideAnim }] },
                    ]}
                    // To prevent touch events on the overlay from passing through to the drawer
                    onStartShouldSetResponder={() => true}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Profile Header */}
                        <View style={styles.profileHeader}>
                            {/* Placeholder for profile image - replace with actual Image component if you have user avatars */}
                            <View style={styles.avatarPlaceholder}>
                                <Ionicons name="person-circle-outline" size={70} color="#FFFFFF" />
                            </View>
                            <Text style={styles.profileName}>{userData?.name || 'Jina la Mtumiaji'}</Text>
                            <Text style={styles.profileEmail}>{userData?.email || 'Barua Pepe'}</Text>
                        </View>

                        {/* Drawer Items */}
                        <View style={styles.drawerItemsContainer}>
                            <DrawerItem iconName="shield-checkmark-outline" label="Msimamizi" onPress={() => {onClose(); /* Link to role info if any */ Alert.alert("Jukumu", "Wewe ni Msimamizi");}}/>
                            {/* Add other role-based items or info if needed */}
                            <View style={styles.separator} />
                            <DrawerItem iconName="help-buoy-outline" label="Msaada na Maoni" onPress={() => {onClose(); Alert.alert("Msaada", "Wasiliana nasi kwa msaada.");}}/>
                            <DrawerItem iconName="settings-outline" label="Mipangilio Mingine" onPress={() => {onClose(); navigation.navigate('Settings');}} />
                            {/* ^^^ Assumes you have a separate SettingsScreen in your navigation */}
                             <View style={styles.separator} />
                            <DrawerItem iconName="log-out-outline" label="Ondoka" onPress={handleLogout} />
                        </View>
                    </ScrollView>

                    {/* Update Profile Button at the bottom of the drawer */}
                    <TouchableOpacity style={styles.updateProfileButton} onPress={handleUpdateProfile}>
                        <Text style={styles.updateProfileButtonText}>Sasisha Wasifu</Text>
                    </TouchableOpacity>
                </Animated.View>
            </TouchableOpacity>
        </Modal>
    );
};

