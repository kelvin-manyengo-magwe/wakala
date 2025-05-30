import { smsEvent, parsedData } from './types'; // you can extract shared interfaces to types.ts
import { HalotelWithdrawalParser } from './Halotel/HalotelWithdrawParser';
import { HalotelDepositParser } from './Halotel/HalotelDepositParser';


export const SmsParser = (sms: smsEvent): parsedData | null => {
  const body = sms.body;

  // Priority list of available parsers
  const parsers = [
    HalotelWithdrawParser,
    // HalotelDepositParser,
    // AirtelWithdrawParser,
    // AirtelDepositParser,
  ];

  for (const parser of parsers) {
    const result = parser(sms);
    if (result) {
      return result;
    }
  }

  // No parser matched
  return null;
};
