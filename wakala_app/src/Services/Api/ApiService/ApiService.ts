import axios from 'axios';
import { env } from '../../../config/env.ts';

const API_BASE_URL = env.API_BASE_URL;




            {/*
                    It is not used for the real mobile login
                    for only background login get token for the syncing of transactions to web.
                */}
export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });
  return response.data.token;
};



export const syncTransactions = async (transactions, deviceId, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/transactions/sync`,
      { transactions, device_id: deviceId },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('❌ Sync failed:', error.response?.data || error.message);
    throw error;
  }
};