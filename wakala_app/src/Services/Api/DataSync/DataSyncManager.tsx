// src/Services/DataSync/DataSyncManager.ts
import { getRealm } from '../../Database/Realm/Realm';         // Adjust path
import DeviceInfo from 'react-native-device-info';
import { axiosInstance } from '../ApiService/ApiService';             // Use the global axios instance
import { deposits_transaction } from '../../Database/Realm/Schemas/TransactionsSchema'; // Assuming schema name from your image

// Type for the transaction data sent to the API
interface TransactionSyncPayload {
    _id?: string; // Realm ID can be optional for the API
    customer_name: string;
    customer_no: string;
    date: string; // ISO string
    amount: number;
    ref_no: string;
    type: string;
    commission: number;
    float: number;
    raw: string;
    mno: string;
}

// This specific syncTransactions API call function might now live in its own file like TransactionApiService.ts
// or stay here if DataSyncManager only has this one API interaction. For true separation,
// it could be in another ApiService file. Let's define it here for now.
const apiPostSyncTransactions = async (
    transactions: TransactionSyncPayload[],
    deviceId: string
    // Token will be automatically added by axiosInstance interceptor
): Promise<any> => {
    console.log('DataSyncManager: Attempting to post transactions via apiPostSyncTransactions.');
    // The axiosInstance will automatically pick up the Authorization header from the interceptor
    const response = await axiosInstance.post(
        `/transactions/sync`, // Endpoint path relative to API_BASE_URL
        { transactions, device_id: deviceId }
    );
    return response.data; // Return the data part of the response
};


export const syncNow = async (authTokenProvided?: string | null): Promise<boolean> => {
    // authTokenProvided is now optional. The interceptor handles token attachment.
    // However, we might still check if a token EXISTS before attempting,
    // as a hint that the user is logged in.
    console.log('DataSyncManager: syncNow called.');

    // Optional: Check if token exists locally to avoid unnecessary API calls if known logged out
    // const tokenCheck = authTokenProvided || await getAuthToken();
    // if (!tokenCheck) {
    //     console.warn('DataSyncManager: No auth token available for sync. User likely logged out.');
    //     return false;
    // }
    // Note: The interceptor will handle adding the token. If it's null/missing, the request might fail with 401.

    try {
        const deviceId = await DeviceInfo.getUniqueId();
        const realm = await getRealm();

        // Make sure 'deposits_transaction' is the correct schema name you use with realm.objects()
        const transactions = realm.objects<deposits_transaction>('deposits_transaction');

        if (transactions.length === 0) {
            console.log('DataSyncManager: Hakuna miamala ya kusawazisha.');
            return true; // Successfully did nothing, or return specific status
        }

        const transactionsToSync: TransactionSyncPayload[] = transactions.map(tx => ({
            _id: typeof tx._id === 'object' ? tx._id.toHexString() : tx._id, // Handle Realm ObjectId
            customer_name: tx.customer_name,
            customer_no: tx.customer_no,
            date: tx.date instanceof Date ? tx.date.toISOString() : new Date(tx.date).toISOString(), // Ensure it's ISO
            amount: tx.amount,
            ref_no: tx.ref_no,
            type: tx.type,
            commission: tx.commission,
            float: tx.float,
            raw: tx.raw,
            mno: tx.mno || 'unknown',
        }));

        console.log(`ℹ️ DataSyncManager: Inajaribu kusawazisha miamala ${transactionsToSync.length}...`);
        const response = await apiPostSyncTransactions(transactionsToSync, deviceId);
        console.log('✅ DataSyncManager: Usawazishaji umefanikiwa:', response);

        // Optional: Mark transactions as synced or delete
        // realm.write(() => { realm.delete(transactions); });
        return true;

    } catch (error: any) {
        console.log('DataSyncManager: Kosa la kusawazisha:', error);
        if (error?.status === 401 || error?.response?.status === 401) {
             console.log('❌ DataSyncManager: Tokeni ya uthibitisho si sahihi/imeisha muda. Wakala anahitaji kuingia tena.');
             // Should trigger a global logout/re-auth flow here
             // import { clearAuthData } from '../../auth/authStorage'; // Path might differ
             // await clearAuthData();
             // navigateToLoginScreen(); // Requires access to navigation
        }
        return false; // Sync failed
    }
};


