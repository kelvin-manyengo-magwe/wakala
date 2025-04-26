import Realm from 'realm';
import { TransactionsSchema } from '../Schemas/TransactionsSchema';


//opening realm in the app

export const getRealm = async () => {
        return await Realm.open({
                schema: [TransactionsSchema],
            });
    };