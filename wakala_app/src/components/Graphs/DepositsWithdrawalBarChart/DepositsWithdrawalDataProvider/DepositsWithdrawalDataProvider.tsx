import { getRealm } from '../../../../Services/Database/Realm/Realm';

export const DepositsWithdrawalDataProvider = async () => {
          const realm = await getRealm();
          const transactions = realm.objects<any>('deposits_transaction');

          let airtelDeposits = 0;
          let airtelWithdrawals = 0;
          let halotelDeposits = 0;
          let halotelWithdrawals = 0;

  transactions.forEach((txn) => {
    if (txn.mno === 'airtel') {
          if (txn.type === 'deposit') {
                 airtelDeposits += txn.amount;
          } else if (txn.type === 'withdrawal') {
                airtelWithdrawals += txn.amount;
          }
    }

    if (txn.mno === 'halotel') {
              if (txn.type === 'deposit') {
                    halotelDeposits += txn.amount;
              } else if (txn.type === 'withdrawal') {
                     halotelWithdrawals += txn.amount;
              }
    }
  });

console.log('🔍 transactions count:', transactions.length);


  return {
    airtelDeposits,
    airtelWithdrawals,
    halotelDeposits,
    halotelWithdrawals,
  };

};
