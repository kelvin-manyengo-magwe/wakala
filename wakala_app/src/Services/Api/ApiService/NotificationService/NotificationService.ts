import { axiosInstance } from '../ApiService';

/**
 * Fetches the user's notifications from the API.
 */
export const getNotifications = async () => {
  try {
    const response = await axiosInstance.get('/notifications');
    return response.data.data;
  } catch (error) {
    console.error('ApiService: Error fetching notifications:', error);
    throw error;
  }
};

/**
 * Tells the API to mark all notifications as read.
 */

export const markNotificationsAsRead = async () => {
    try {
        const response = await axiosInstance.post('/notifications/mark-as-read');
        return response.data;
    } catch (error) {
        console.error('ApiService: Error marking as read:', error);
        throw error;
    }
};


export const getUnreadNotificationCount = async () => {
  try {
    const response = await axiosInstance.get('/notifications/unread-count');
    return response.data.count || 0;
  } catch (error) {
    console.error('ApiService: Error fetching unread count:', error);
    return 0;
  }
};