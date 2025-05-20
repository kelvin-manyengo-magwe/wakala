import { getRealm } from '../../Database/Realm/Realm';
import DeviceInfo from 'react-native-device-info';
import { syncTransactions } from '../ApiService/ApiService';

export const syncNow = async (authToken: string) => {
              console.log('🚀 syncNow called');
  try {
    const deviceId = await DeviceInfo.getUniqueId();
    const realm = await getRealm();
    const transactions = realm.objects('deposits_transaction');

    const transactionsToSync = transactions.map(tx => ({
      customer_name: tx.customer_name,
      customer_no: tx.customer_no,
      date: tx.date.toISOString(),
      amount: tx.amount,
      ref_no: tx.ref_no,
      type: tx.type,
      commission: tx.commission,
      float: tx.float,
      raw: tx.raw
    }));

    if (transactionsToSync.length > 0) {
            const response = await syncTransactions(transactionsToSync, deviceId, authToken);
      console.log('✅ Sync successful', response);
    } else {
      console.log('ℹ️ No transactions to sync');
    }
  } catch (error) {
    console.error('❌ Sync error:', error);
  }
};
