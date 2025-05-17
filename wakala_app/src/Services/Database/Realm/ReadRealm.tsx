import { getRealm } from './Realm';

// this to be used later on transaction screen list, when load app and hitting the refresh button

export const ReadRealm = async () => {
        const realm = await getRealm();

            try {
                    const transactions = realm.objects('deposits_transaction');



                    console.log('All Transactions data from Realm Database:\n ', transactions);
                }
            catch(error) {
                    console.log('❌ Failed to fetch transactions from Realm DB: ', error);
                }
            finally {
                    //realm.close();      //closing realm after use
                }
    };