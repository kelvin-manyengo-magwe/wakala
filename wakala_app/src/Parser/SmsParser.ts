import 'react-native-get-random-values';  //being added at the first for generating globally unique id no's
import { v4 as uuidv4 } from 'uuid';


interface smsEvent {
            address: string,
            body: string,
    }

interface parsedData {
        _id: string,
        customer_name: string,
        customer_no: string,
        date: string,
        amount: number,
        ref_no: string,
        type: string,
        commission: string,
        float: string,
        raw: string,
        createdAt?: string,
    }

    export const SmsParser = (sms: smsEvent) : parsedData | null => {
            const body = sms.body;

            try {
                        const refMatch = body.match(/Utambulisho wa Muamala:\s*(\d+)/);
                        const amountMatch = body.match(/Umeweka\s*TSH\s*([\d,]+\.\d{2})/);
                        const nameMatch = body.match(/kwa\s+([A-Z\s]+),/);
                        const phoneMatch = body.match(/,\s*(\d{9,15})/);
                        const dateMatch = body.match(/wakati\s+([\d\/: ]+)/);
                        const commissionMatch = body.match(/kamisheni:\s*TSH\s*([\d,]+\.\d{2})/);
                        const floatMatch = body.match(/Salio jipya la floti ni TSH\s*([\d,]+\.\d{2})/);

                        if(!refMatch || ! amountMatch || !nameMatch || !phoneMatch || !dateMatch || !commissionMatch || !floatMatch) {
                                    console.warn('Incomplete details to match');
                                     return null;
                            }



                        const parsed: parsedData = {
                                          _id: uuidv4(), //best for globally unique id
                                          customer_name: nameMatch[1].trim(),
                                          customer_no: phoneMatch[1],
                                          date: new Date(dateMatch[1].replace(/\//g, '-')).toISOString(),
                                          amount: parseFloat(amountMatch[1].replace(/,/g, '')),
                                          ref_no: refMatch[1],
                                          type: 'weka', // fixed since it's "Umeweka"
                                          commission: commissionMatch[1],
                                          float: floatMatch[1],
                                          raw: body,
                                          createdAt: new Date().toISOString()
                            };

                        return parsed;

                }
            catch(err) {
                        console.error('Failed to parse', err);
                        return null;
                    }
        }