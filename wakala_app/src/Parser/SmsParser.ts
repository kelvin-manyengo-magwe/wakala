import { smsEvent, parsedData } from './types';
import { HalotelWithdrawalParser } from './Halotel/HalotelWithdrawalParser';
import { HalotelDepositParser } from './Halotel/HalotelDepositParser';
import { AirtelDepositParser } from './Airtel/AirtelDepositParser';
import { AirtelWithdrawalParser } from './Airtel/AirtelWithdrawalParser';




export const SmsParser = (sms: smsEvent): parsedData | null => {
  const body = sms.body;

          console.log('📩 [SmsParser] Received SMS for parsing:');

  // Priority list of available parsers
  const parsers = [
    HalotelWithdrawalParser, HalotelDepositParser,
    AirtelDepositParser, AirtelWithdrawalParser,
  ];

  for (const parser of parsers) {
    const result = parser(sms);
    if (result) {
             console.log(`✅ Matched parser: ${parser.name}`);
             console.log('🧾 Parsed data:', result);

      return result;
    } else {
            console.log(`❌ ${parser.name} did not match`);
          }
  }

    console.log('⚠️ No parser matched this SMS.');

  return null;
};
