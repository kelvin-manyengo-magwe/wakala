import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SettingsRow } from './SettingsRow/SettingsRow';
import styles from './styles';


export const Settings = () => {
    const navigation = useNavigation();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    // const [isDarkMode, setIsDarkMode] = useState(false); // If you implement theme switch

    const handleToggleNotifications = (value: boolean) => {
        setNotificationsEnabled(value);
        // TODO: Save this preference (e.g., AsyncStorage) and apply it
        console.log('Notifications toggled:', value);
    };

    const handleChangeLanguage = () => {
        // TODO: Implement language change modal or navigation
        Alert.alert("Badili Lugha", "Kipengele cha kubadili lugha kinakuja hivi karibuni.");
    };

    const handleContactUs = () => {
        // TODO: Implement contact/support action (e.g., Linking.openURL('mailto:support@wakala.app'))
        Alert.alert("Mawasiliano", "Wasiliana nasi kupitia support@wakala.app");
    };


    return (
        <View style={styles.screenContainer}>
            <StatusBar barStyle={Platform.OS === "ios" ? "dark-content" : "dark-content"} backgroundColor="#FFFFFF" />


            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <SettingsRow
                    iconName="notifications-outline" // bell icon from screenshot
                    label="Taarifa"
                    isSwitch={true}
                    switchValue={notificationsEnabled}
                    onSwitchChange={handleToggleNotifications}
                />

                {/* Badili Mwanga (Change Theme) - Using the icon from screenshot */}
                {/* For an actual theme switch, you'd have global state (Context API, Redux, Zustand)
                <SettingRow
                    iconName="moon-outline" // moon icon from screenshot
                    label="Badili Mwanga"
                    isSwitch={true}
                    switchValue={isDarkMode} // Assuming you have isDarkMode state
                    onSwitchChange={(value) => {
                        setIsDarkMode(value);
                        // Call your theme change function
                        console.log('Theme changed to:', value ? 'Dark' : 'Light');
                    }}
                /> */}



                <SettingsRow
                    iconName="globe-outline" // globe icon from screenshot
                    label="Badili Lugha"
                    onPress={handleChangeLanguage}
                    showChevron={true}
                />

                <SettingsRow
                    iconName="person-circle-outline" // person icon for Mawasiliano/Contact
                    label="Mawasiliano"
                    onPress={handleContactUs}
                    // No chevron if it's a direct action like opening mail/phone
                    showChevron={false}
                />

                {/* You can add more items based on the screenshot or your needs */}
                 {/* <View style={styles.sectionSeparator} />
                <SettingRow iconName="shield-checkmark-outline" label="Sera ya Faragha" onPress={() => {}} showChevron={true} />
                <SettingRow iconName="document-text-outline" label="Vigezo na Masharti" onPress={() => {}} showChevron={true} /> */}

            </ScrollView>
        </View>
    );
};

