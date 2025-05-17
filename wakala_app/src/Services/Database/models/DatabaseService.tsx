import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { getRealm } from '../Realm/Realm';
import { ReadRealm } from '../Realm/ReadRealm';


 //the writting logic to realm database happens here
export const saveToRealm = async (data: any) => {
  const realm = await getRealm();


            // Normalize type for summary logic {to be changed later cause on some UI's there is 'weka' and 'toa'}
              let normalizedType = data.type;
              if (normalizedType === 'weka') normalizedType = 'deposit';
              if (normalizedType === 'toa') normalizedType = 'withdrawal';

  try {
    realm.write(() => {

            const parsedData = {
                                    _id: uuidv4(),  // Unique id for each saved sms
                                       customer_name: data.customer_name,
                                       customer_no: data.customer_no,
                                       date: new Date(data.date),
                                       amount: parseFloat(data.amount),
                                       ref_no: data.ref_no,
                                       type: normalizedType,
                                       commission: parseFloat(data.commission),
                                       float: typeof data.float === 'number' ? data.float : parseFloat(data.float),
                                       raw: data.raw,
                                       createdAt: new Date(),
                                   };

                if (isNaN(parsedData.float)) {
                        console.warn('Invalid float value:', data.float);

                        return null;
                      }

                      realm.create('deposits_transaction', parsedData);
    });


    const transactions = realm.objects('deposits_transaction');
        console.log('All transactions Data: ', JSON.stringify(transactions, null, 2));

            let totalDeposits = 0;
            let totalCommission = 0;
            let totalFloat = 0;
            transactions.forEach((transaction: any) => {
              totalDeposits += transaction.amount;
              totalCommission += transaction.commission;
              totalFloat += transaction.float;
            });
            console.log('Summary: Deposits:', totalDeposits, 'Commission:', totalCommission, 'Float:', totalFloat);


    console.log('✅ Successfully saved SMS to Realm');


        console.log('Transaction count:', transactions.length);
  } catch (error) {
    console.error('❌ Failed to save SMS to Realm:', error);
  } finally {
        //realm.close();     Not closing the realm because is used by the UI
  }
};
