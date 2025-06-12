// src/Services/Api/ApiService.ts
import axios, { InternalAxiosRequestConfig } from 'axios';
import { env } from '../../config/env';
import { getAuthToken } from '../auth/authStorage'; // We'll need this for interceptors

export const API_BASE_URL = env.API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 15000, // Optional: set a timeout for requests
});

// Axios Request Interceptor: To automatically add the Auth Token to requests
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = await getAuthToken(); // Retrieve token from storage
    if (token && config.headers) { // Check if headers object exists
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Axios Response Interceptor (e.g., for handling global 401 errors)
axiosInstance.interceptors.response.use(
  (response) => response, // Simply return response on success
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.warn('ApiService: Token expired or invalid. Need to re-authenticate or refresh.');

        //functionalites possible here
      // 1. To refresh tokens if having refreshing token mechanism
      // 2. To trigger a global logout/redirect, might use an event emitter or a navigation service.


          }

    return Promise.reject(error.response?.data || error.message || error);
  }
);