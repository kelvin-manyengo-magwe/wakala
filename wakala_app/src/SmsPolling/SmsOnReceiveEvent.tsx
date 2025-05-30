import React, { useEffect, useState } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';
import { SmsParser } from '../Parser/SmsParser';
import { saveToRealm } from '../Services/Database/models/DatabaseService';



export const SmsOnReceiveEvent = () => {

            useEffect(() => {
                    const  { SmsReceiverModule } = NativeModules;  //smsReceiver module to bridge gap from javascript

                                console.log(SmsReceiverModule);
                        if(SmsReceiverModule) {
                                const SmsReceiverEventEmitter = new NativeEventEmitter(SmsReceiverModule);
                                            console.log(SmsReceiverEventEmitter);

                                        SmsReceiverEventEmitter.addListener("sms_onReceive", (sms) => {
                                                                        console.log('📩 New sms Received: ',sms);

                                                //saving the transaction to the realm
                                                    const parsedData = SmsParser(sms);
                                                        saveToRealm(parsedData);

                                                });

                                         return () => SmsReceiverEventEmitter.removeAllListeners('sms_onReceive');
                        } else {
                            console.warn("SmsReceiverModule is not available.");

                        }

            },[]);

                    return null;
}


