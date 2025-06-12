// src/api/loginService.ts
import { Alert } from 'react-native';
import { axiosInstance } from './apiService';
import { loginCredentials } from '../../../Screens/Login/types';

export const login = async (credentials: loginCredentials) => {
  console.log('loginService: Attempting login with', credentials);

  try {
    const response = await axiosInstance.post('/mobile/login', credentials);
    console.log('loginService: Response', response.data);
    return response.data;
  } catch (error: any) {
    console.error('loginService: Error', error.response?.data || error.message);

    if (error.response?.data?.message) {
      Alert.alert('Kuingia Kumeshindikana', error.response.data.message);
    }
    else {
      Alert.alert(
        'Kosa la Muunganisho',
        'Imeshindikana kuunganisha na seva. Tafadhali angalia mtandao wako.'
      );
    }

    throw error.response?.data || error;
  }
};
