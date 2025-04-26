import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { getRealm } from '../Realm/Realm';
import { ReadRealm } from '../Realm/ReadRealm';



export const saveToRealm = async (data: any) => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.create('deposits_transaction', {
        _id: uuidv4(),  // Unique id for each saved sms
        customer_name: data.customer_name,
        customer_no: data.customer_no,
        date: new Date(data.date),
        amount: parseFloat(data.amount),
        ref_no: data.ref_no,
        type: data.type,
        commission: parseFloat(data.commission),
        float: parseFloat(data.float),
        raw: data.raw,
        createdAt: new Date(),
      });
    });


    const transactions = realm.objects('deposits_transaction');
        console.log('All transactions Data: ', JSON.stringify(transactions, null, 2));

    console.log('✅ Successfully saved SMS to Realm');
  } catch (error) {
    console.error('❌ Failed to save SMS to Realm:', error);
  } finally {
    realm.close();  // Always closing realm after use
  }
};
