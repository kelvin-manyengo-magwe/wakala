import PouchDB from 'pouchdb';


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