// src/components/SettingRow/SettingRow.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming you use Ionicons
import styles from './styles';


interface SettingsRowProps {
    iconName: string; // Name of the Ionicons icon
    label: string;
    onPress?: () => void;
    isSwitch?: boolean;
    switchValue?: boolean;
    onSwitchChange?: (value: boolean) => void;
    showChevron?: boolean; // To show the '>' or 'v' arrow
}

export const SettingsRow: React.FC<SettingsRowProps> = ({
    iconName,
    label,
    onPress,
    isSwitch,
    switchValue,
    onSwitchChange,
    showChevron,
}) => {
    return (
        <TouchableOpacity
            style={styles.rowContainer}
            onPress={!isSwitch ? onPress : undefined}
            disabled={isSwitch || (!onPress && !isSwitch)}
            activeOpacity={onPress ? 0.7 : 1}
        >
            <View style={styles.iconContainer}>
                <Ionicons name={iconName} size={26} color="#333333" />
            </View>
            <Text style={styles.labelText}>{label}</Text>
            <View style={styles.actionContainer}>
                {isSwitch && onSwitchChange && (
                    <Switch
                        trackColor={{ false: '#E9E9EA', true: '#E63946' }} active
                        thumbColor={switchValue ? '#FFFFFF' : '#FFFFFF'}
                        ios_backgroundColor="#E9E9EA"
                        onValueChange={onSwitchChange}
                        value={switchValue}
                        style={styles.switchStyle}
                    />
                )}
                {showChevron && !isSwitch && onPress && (
                    <Ionicons name="chevron-down-outline" size={24} color="#B0B0B0" />
                )}
            </View>
        </TouchableOpacity>
    );
};

