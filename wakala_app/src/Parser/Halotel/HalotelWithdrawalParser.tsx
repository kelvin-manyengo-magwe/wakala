import { v4 as uuidv4 } from 'uuid';
import { smsEvent, parsedData } from '../types';



export const HalotelWithdrawalParser = (sms: smsEvent): parsedData | null => {
  const body = sms.body;

  try {
    const refMatch = body.match(/Utambulisho wa muamamala:\s*(\d+)/i);
    const nameMatch = body.match(/([A-Z\s]+),\s*namba ya simu/i);
    const phoneMatch = body.match(/simu\s+(\d{9,15})/i);
    const dateMatch = body.match(/wakati\s+([\d\/: ]+)/i);
    const amountMatch = body.match(/ametoa\s*TSH\s*([\d,]+\.\d{2})/i);
    const commissionMatch = body.match(/kamisheni:\s*TSH\s*([\d,]+\.\d{2})/i);
    const floatMatch = body.match(/Salio lako la floti ni TSH\s*([\d,]+\.\d{2})/i);

    if ( !refMatch || !nameMatch || !phoneMatch || !dateMatch || !amountMatch || !commissionMatch || !floatMatch)
            return null;


    const parsed: parsedData = {
      _id: uuidv4(),
      customer_name: nameMatch[1].trim(),
      customer_no: phoneMatch[1],
      date: new Date(dateMatch[1].replace(/\//g, '-')).toISOString(),
      amount: parseFloat(amountMatch[1].replace(/,/g, '')),
      ref_no: refMatch[1],
      type: 'toa',
      commission: parseFloat(commissionMatch[1].replace(/,/g, '')),
      float: parseFloat(floatMatch[1].replace(/,/g, '')),
      raw: body,
      createdAt: new Date().toISOString()
    };

        console.log('Final parsed object:', { ...parsed,
                                                floatType: typeof parsed.float,
                                                 floatValue: parsed.float
                        });



    return parsed;

  } catch (err) {
    console.error('❌ Halotel Withdraw parse failed:', err);
    return null;
  }
};
