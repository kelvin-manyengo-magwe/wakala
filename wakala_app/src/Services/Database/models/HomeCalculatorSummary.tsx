import { getRealm } from '../Realm/Realm';
import { HomeTotalMnoSummary } from '../../../Screens/Home/Home.types';



export const HomeCalculatorSummary = async () : HomeTotalMnoSummary => {
            const realm = await getRealm();
            //fetching all the transaction from realm
            const transactions = realm.objects<deposits_transaction>('deposits_transaction');  //the T <type> with the schema

            let totalDeposits = 0;
            let totalCommission = 0;
            let totalWithdrawals = 0;
            let totalFloat = 0;

                transactions.forEach(transaction => {
                            if(transaction.type === 'deposit') {
                                    totalDeposits += transaction.amount;
                                    totalCommission += transaction.commission;
                                    totalFloat += transaction.float;
                                }
                            else if(transaction.type === 'withdrawal') {
                                    totalWithdrawals +=  transaction.amount;
                                }
                    });

                console.log('TotalSummary: ', totalWithdrawals, totalCommission, totalFloat, totalDeposits);
        return {
                totalWithdrawals: parseFloat(totalWithdrawals),
                totalDeposits: parseFloat(totalDeposits.toFixed(2)),
                totalFloat: parseFloat(totalFloat.toFixed(2)),
                totalCommission: parseFloat(totalCommission.toFixed(2)),
            }
    }


