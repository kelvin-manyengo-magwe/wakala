import { smsEvent, parsedData } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const AirtelWithdrawalParser = (sms: smsEvent): parsedData | null => {
  const body = sms.body;

  try {
    const amountMatch = body.match(/Umepokea\s*Tsh([\d,]+\.\d{2})/i);
    const namePhoneMatch = body.match(/kutoka\s+(\d{9,15})\s+([A-Z\s]+)/i);
    const refMatch = body.match(/Muamala:([A-Z0-9.]+)/i);
    const balanceMatch = body.match(/Salio\s*Tsh([\d,]+\.\d{2})/i);
    const commissionMatch = body.match(/Kamisheni\s*Tsh\s*([\d,]+\.\d{2})/i);
    const taxMatch = body.match(/,(\d+)%\s*Kodi/i);

    if (!amountMatch || !namePhoneMatch || !refMatch || !balanceMatch || !commissionMatch) {
      console.log('❌ [AirtelWithdrawalParser] Incomplete match on Airtel withdrawal SMS.');
      return null;
    }

    const parsed: parsedData = {
      _id: uuidv4(),
      customer_name: namePhoneMatch[2].trim(),
      customer_no: namePhoneMatch[1],
      date: new Date().toISOString(), // SMS has no timestamp, so use current
      amount: parseFloat(amountMatch[1].replace(/,/g, '')),
      ref_no: refMatch[1],
      type: 'toa',
      commission: parseFloat(commissionMatch[1].replace(/,/g, '')),
      float: parseFloat(balanceMatch[1].replace(/,/g, '')),
      raw: body,
      mno: 'airtel',
      createdAt: new Date().toISOString(),
      metadata: {
        tax_percent: taxMatch ? parseInt(taxMatch[1]) : null,
      },
    };

    console.log('✅ [AirtelWithdrawalParser] Parsed data:', parsed);

    return parsed;
  } catch (error) {
    console.log('❌ [AirtelWithdrawalParser] Error while parsing:', error);
    return null;
  }
};
