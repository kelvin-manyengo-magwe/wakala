import 'react-native-get-random-values';
import PouchDB from 'pouchdb-react-native';


const db = new PouchDB('sms-database');

export const saveSmsToPouchDB = async (data: any) => {
            try {
                const res = await db.post({
                        ...data, _id: new Date().toISOString()
                    });

                    console.log('Successfully saved data to PouchDB.',res);
                }
            catch(err) {
                    console.error('Failed to save data to PouchDB', err);
                }
    };