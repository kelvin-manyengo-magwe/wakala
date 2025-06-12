// for storing the auth token and the user data
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'userAuthToken';
const USER_DATA_KEY = 'userData';

interface UserData {
    id: number;
    name: string;
    email: string;
}

export const storeAuthData = async (token: string, userData: UserData): Promise<void> => {
    try {
        await AsyncStorage.setItem(TOKEN_KEY, token);
        await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
        console.log('Auth data stored successfully.');
    } catch (error) {
        console.error('Error storing auth data:', error);
    }
};

export const getAuthToken = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem(TOKEN_KEY);
    } catch (error) {
        console.error('Error getting auth token:', error);
        return null;
    }
};

export const getUserData = async (): Promise<UserData | null> => {
    try {
        const userDataString = await AsyncStorage.getItem(USER_DATA_KEY);
        return userDataString ? JSON.parse(userDataString) : null;
    } catch (error) {
        console.error('Error getting user data:', error);
        return null;
    }
};

export const clearAuthData = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(TOKEN_KEY);
        await AsyncStorage.removeItem(USER_DATA_KEY);
        console.log('Auth data cleared.');
    } catch (error) {
        console.error('Error clearing auth data:', error);
    }
};