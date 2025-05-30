import 'react-native-get-random-values';  //being added at the first for generating globally unique id no's
import { v4 as uuidv4 } from 'uuid';
import { smsEvent, parsedData } from '../types';



    export const HalotelDepositParser = (sms: smsEvent) : parsedData | null => {
            const body = sms.body;

            try {
                        const refMatch = body.match(/Utambulisho wa Muamala:\s*(\d+)/);
                        const amountMatch = body.match(/Umeweka\s*TSH\s*([\d,]+\.\d{2})/);
                        const nameMatch = body.match(/kwa\s+([A-Za-z\s]+),/); // case insensitive for both lower and uppercase
                        const phoneMatch = body.match(/,\s*(\d{9,15})/);
                        const dateMatch = body.match(/wakati\s+([\d\/: ]+)/);
                        const commissionMatch = body.match(/kamisheni:\s*TSH\s*([\d,]+\.\d{2})/);

                        const floatMatch = body.match(/Salio jipya la floti ni TSH\s*([\d,]*\d+\.\d{2})/);
                            console.log('Float Match:', floatMatch[1]);



                        if(!refMatch || ! amountMatch || !nameMatch || !phoneMatch || !dateMatch || !commissionMatch || !floatMatch) {
                                    console.warn('Incomplete details to match');
                                     return null;
                            }

                        // Parse float value safely
                                const floatString = floatMatch[1].replace(/,/g, '');
                                const floatValue = parseFloat(floatString);
                                console.log('Parsed float value:', floatValue, 'Type:', typeof floatValue);

                           if (isNaN(floatValue)) {
                                      console.warn('Failed to parse float value:', floatMatch[1]);
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
                                          commission: parseFloat(commissionMatch[1].replace(/,/g, '')),
                                          float: floatValue,

                                          raw: body,
                                          createdAt: new Date().toISOString()
                            };

                        console.log('Final parsed object:', {
                          ...parsed,
                          floatType: typeof parsed.float,
                          floatValue: parsed.float
                        });

                        return parsed;

                }
            catch(err) {
                        console.error('Failed to parse', err);
                        return null;
                    }
        }