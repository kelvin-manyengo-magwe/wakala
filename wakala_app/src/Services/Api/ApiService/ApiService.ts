import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.185:8000/api';
    //const API_BASE_URL = 'https://9c05-197-186-28-180.ngrok-free.app:8000/api';


// Login and get token
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