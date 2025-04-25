import 'react-native-get-random-values';
import PouchDB from 'pouchdb';
import { useEffect } from 'react';
import AsyncStorageAdapter from 'pouchdb-adapter-asyncstorage';


//registering adapter plugin
PouchDB.plugin(AsyncStorageAdapter);

const db = new PouchDB('wakala_sms_db',{
                        adapter: 'asyncstorage',
                        });

//showing sms to the console
const showPouchDbconsole = async () => {
        try {
                const result = await db.allDocs({ include_docs: true });

                result.rows.forEach(row => {
                        console.log('Document: ', row.doc);
                    })
            }
        catch(error) {
                console.log('Failed to fetch docs', error);
            }
    }

    useEffect(() => {
            showPouchDbconsole();
        },[]);


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