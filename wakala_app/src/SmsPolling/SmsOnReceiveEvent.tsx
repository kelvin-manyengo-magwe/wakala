import React, { useEffect, useState } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { SmsParser } from '../Parser/SmsParser';
import { saveSmsToPouchDB } from '../Services/PouchDB/PouchDBService';


export const SmsOnReceiveEvent = () => {

            useEffect(() => {
                    const  { SmsReceiverModule } = NativeModules;  //smsReceiver module to bridge gap from javascript

                                console.log(SmsReceiverModule);
                        if(SmsReceiverModule) {
                                const SmsReceiverEventEmitter = new NativeEventEmitter(SmsReceiverModule);
                                            console.log(SmsReceiverEventEmitter);

                                        SmsReceiverEventEmitter.addListener("sms_onReceive", (sms) => {
                                                                        console.log('New sms Received: ',sms);

                                                                     const parsed = SmsParser(sms);

                                                                     if(parsed) {
                                                                            saveSmsToPouchDB(parsed);
                                                                         }
                                                });

                                         return () => SmsReceiverEventEmitter.removeAllListeners('sms_onReceive');
                        } else {
                            console.warn("SmsReceiverModule is not available.");

                        }

            },[]);

                    return null;
}


