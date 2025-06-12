import { axiosInstance, API_BASE_URL } from './ApiService'; // Uses the configured axios instance
import { loginCredentials, LoginResponse } from '../../Screens/Login/types'; // Path to your Login types

export const apiLoginWakala = async (credentials: loginCredentials): Promise<LoginResponse> => {
    console.log('LoginService: Attempting login with credentials:', credentials);
    try {
        // Login does not need the token interceptor to run first, as it's getting the token.

        // If axiosInstance is used, will try to add a token if one exists, which is fine.
        const response = await axiosInstance.post<LoginResponse>(`/mobile/login`, credentials);


        // If using axios, response.data is already parsed
        console.log('LoginService: Login response data:', response.data);


        if (response.data.success && response.data.token) {
            return response.data;
        }

            else {
            // Throw an error that includes the message from the backend
            throw new Error(response.data.message || 'Jina la mtumiaji au nenosiri si sahihi.');
        }
    } catch (error: any) {
        console.error('LoginService: Login API error:', error);


        const errorMessage = error.message || // If error is Error object with a message
                           (typeof error === 'string' ? error : null) || // If error is string from backend throw

                           'Kosa la kuingia. Tafadhali jaribu tena.'; // Fallback

        throw new Error(errorMessage);
    }
};