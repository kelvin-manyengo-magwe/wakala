import { getRealm } from './Realm';


export const ReadRealm = async () => {
        const realm = await getRealm();
        const transactions = realm.Objects('Transactions');

            console.log('Transactions: ', transactions);
            realm.close();      //closing realm after use
    };