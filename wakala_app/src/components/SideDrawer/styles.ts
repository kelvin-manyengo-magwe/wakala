import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8; // Adjust drawer width as needed

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    drawerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: DRAWER_WIDTH,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'ios'
            ? (DeviceInfo.hasNotch() ? 60 : 40)
            : StatusBar.currentHeight || 20,
    },
    profileHeader: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: '#E63946', // Your brand red color
        alignItems: 'center',
        marginBottom: 10,
    },
    avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 4,
    },
    profileEmail: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.8)',
    },
    drawerItemsContainer: {
        flex: 1,
        paddingVertical: 10,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    drawerItemIcon: {
        marginRight: 20,
    },
    drawerItemLabel: {
        fontSize: 16,
        color: '#333333',
        fontWeight: '500',
    },
    separator: {
        height: 1,
        backgroundColor: '#EFEFF4',
        marginVertical: 8,
        marginHorizontal: 20,
    },
    updateProfileButton: {
        backgroundColor: '#E63946',
        paddingVertical: 16,
        marginHorizontal: 20,
        marginBottom: Platform.OS === 'ios'
            ? (DeviceInfo.hasNotch() ? 40 : 25)
            : 25,
        borderRadius: 8,
        alignItems: 'center',
    },
    updateProfileButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default styles;
