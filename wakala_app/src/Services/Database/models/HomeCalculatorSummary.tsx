import { getRealm } from '../Realm/Realm';
import { HomeTotalMnoSummary, deposits_transaction } from '../../../Screens/Home/Home.types';

export const HomeCalculatorSummary = async (): Promise<HomeTotalMnoSummary> => {
    const realm = await getRealm();

    // 1. Fetch ALL transactions, SORTED by createdAt ASCENDING (oldest first).
    // This is CRUCIAL for the "last one wins" float update logic.
    const transactions = realm.objects<deposits_transaction>('deposits_transaction')
                              .sorted('createdAt', false);

    let totalDeposits = 0;
    let totalCommission = 0;
    let totalWithdrawals = 0;

    // This object will store the LATEST float value encountered FOR EACH MNO.
    const latestMnoFloats: { [mnoKey: string]: number } = {};

    // 2. Iterate through ALL transactions (from oldest to newest)
    transactions.forEach(transaction => {
        // Calculate cumulative sums for deposits, withdrawals, commission
        if (typeof transaction.commission === 'number') {
            totalCommission += transaction.commission;
        }
        if (transaction.type === 'deposit' && typeof transaction.amount === 'number') {
            totalDeposits += transaction.amount;
        } else if (transaction.type === 'withdrawal' && typeof transaction.amount === 'number') {
            totalWithdrawals += transaction.amount;
        }

        // Update the latest known float for THIS transaction's MNO
        if (transaction.mno && typeof transaction.float === 'number') {
            const mnoKey = transaction.mno.toLowerCase();
            // Because we sorted transactions by date (oldest first),
            // any subsequent transaction for the same MNO will naturally
            // overwrite the previous float for that MNO in this map.
            // So, by the end of the loop, latestMnoFloats[mnoKey] will hold
            // the float from the VERY LAST (most recent) transaction for that MNO.
            latestMnoFloats[mnoKey] = transaction.float;
        }
    });

    // 3. Calculate the total float by summing the single latest float from EACH MNO
    let calculatedTotalFloat = 0;
    for (const mnoKey in latestMnoFloats) {
        // This check is good practice for iterating object properties
        if (Object.prototype.hasOwnProperty.call(latestMnoFloats, mnoKey)) {
            calculatedTotalFloat += latestMnoFloats[mnoKey];
        }
    }

    console.log('--- HomeCalculatorSummary (from ALL transactions) ---');
    console.log('Total Deposits:', totalDeposits);
    console.log('Total Withdrawals:', totalWithdrawals);
    console.log('Total Commission:', totalCommission);
    console.log('Latest float for each MNO found in data:', latestMnoFloats);
    console.log('Sum of these latest MNO floats:', calculatedTotalFloat);
    console.log('--------------------------------------------------');

    return {
        totalDeposits: totalDeposits,
        totalWithdrawals: totalWithdrawals,
        totalCommission: totalCommission,
        totalFloat: calculatedTotalFloat, // This is the sum of the latest float PER MNO
    };
};