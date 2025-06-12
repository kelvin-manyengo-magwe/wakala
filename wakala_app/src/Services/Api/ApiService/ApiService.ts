import axios from 'axios';
import { env } from '../../../config/env';

export const API_BASE_URL = env.API_BASE_URL;


//for keeping the reusable utilities like the axios instance

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
