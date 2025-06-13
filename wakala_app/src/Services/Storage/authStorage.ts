
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'userAuthToken_v1'; // Added versioning just in case
const USER_DATA_KEY = 'userData_v1';

export interface UserData { // Ensure this matches LoginResponse.user
    id: number;
    name: string;
    email: string;
    phone_no?: string;
    till_numbers_data?: Array<{ mno_key: string, till_no: string }>;
}

export const storeAuthData = async (token: string, userData: UserData): Promise<void> => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, token);
        await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
        console.log('AuthStorage: Auth data stored.');
    } catch (error) {
        console.error('AuthStorage: Error storing auth data:', error);
        throw error; // Re-throw so caller can know
    }
};

export const getAuthToken = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
        console.error('AuthStorage: Error getting auth token:', error);
        return null; // Or throw error
    }
};

export const getUserData = async (): Promise<UserData | null> => {
    try {
        const userDataString = await AsyncStorage.getItem(USER_DATA_KEY);
        return userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error('AuthStorage: Error getting user data:', error);
        return null; // Or throw error
    }
};

export const clearAuthData = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(TOKEN_KEY);
        await AsyncStorage.removeItem(USER_DATA_KEY);
        console.log('AuthStorage: Auth data cleared.');
    } catch (error) {
        console.error('AuthStorage: Error clearing auth data:', error);
        throw error;
    }
};