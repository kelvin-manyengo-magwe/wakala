import { smsEvent, parsedData } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const AirtelDepositParser = (sms: smsEvent): parsedData | null => {
  const body = sms.body;

  try {
    const amountMatch = body.match(/Umetuma\s*([\d,]+\.\d{2})\s*Tsh/i);
    const namePhoneMatch = body.match(/kwa\s+([A-Za-z\s]+)\s+(\d{9,15})/);
    const balanceMatch = body.match(/Salio\s*Tsh\s*([\d,]+\.\d{2})/i);
    const commissionMatch = body.match(/Kamisheni\s*Tsh\s*([\d,]+\.\d{2})/i);
    const refMatch = body.match(/TID:([A-Z0-9.\-]+)/);

    if (!amountMatch || !namePhoneMatch || !balanceMatch || !commissionMatch || !refMatch) {
      console.warn('❌ [AirtelDepositParser] Incomplete match on Airtel deposit SMS.');
      return null;
    }

    const parsed: parsedData = {
      _id: uuidv4(),
      customer_name: namePhoneMatch[1].trim(),
      customer_no: namePhoneMatch[2],
      date: new Date().toISOString(), // No timestamp in SMS, using current time
      amount: parseFloat(amountMatch[1].replace(/,/g, '')),
      ref_no: refMatch[1],
      type: 'weka',
      commission: parseFloat(commissionMatch[1].replace(/,/g, '')),
      float: parseFloat(balanceMatch[1].replace(/,/g, '')),
      raw: body,
      createdAt: new Date().toISOString()
    };

    console.log('✅ [AirtelDepositParser] Parsed data:', parsed);

    return parsed;
  } catch (error) {

    console.error('❌ [AirtelDepositParser] Error while parsing:', error);

    return null;
  }
};
