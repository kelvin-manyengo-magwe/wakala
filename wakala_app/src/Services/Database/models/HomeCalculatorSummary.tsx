import { getRealm } from '../Realm/Realm';
import { HomeTotalMnoSummary } from '../../../Screens/Home/Home.types';


export const HomeCalculatorSummary = () : HomeTotalMnoSummary => {
            const realm = await getRealm();
            //fetching all the transaction from realm
            const transactions = realm.objects<deposits-transaction>('deposits-transaction');  //the T <type> with the schema

            let totalDeposits = 0;
            let totalCommission = 0;
            let totalWithdrawals = 0;
            let totalFloat = 0;

                transactions.forEach(transaction => {
                        switch() {

                            }
                    })
        return (
                <>

                </>
            )
    }


