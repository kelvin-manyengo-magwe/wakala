import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authToken } = useAuth();

  useEffect(() => {
    if (!authToken) return;

    // Initialize real-time updates
    window.Pusher = Pusher;
    const echo = new Echo({
      broadcaster: 'pusher',
      key: process.env.REACT_APP_PUSHER_KEY,
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      auth: {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    });

    echo.private('transactions')
      .listen('.TransactionSynced', (data) => {
        setTransactions(prev => [data.transaction, ...prev]);
      });

    // Initial data load
    const loadTransactions = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/transactions`, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Failed to load transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();

    return () => echo.leave('transactions');
  }, [authToken]);

  return (
    <TransactionContext.Provider value={{ transactions, loading }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
