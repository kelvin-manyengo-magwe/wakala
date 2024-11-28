import React, { useEffect, useState } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';


export const SmsOnReceiveEvent = () => {

            useEffect(() => {
                    const  { SmsReceiverModule } = NativeModules;  //smsReceiver module to bridge gap from javascript

                                console.log(SmsReceiverModule);
                        if(SmsReceiverModule) {
                                const SmsReceiverEventEmitter = new SmsReceiverEventEmitter(SmsReceiverModule);
                                            console.log(SmsReceiverEventEmitter);

                                        SmsReceiverEventEmitter.addListener("sms_onReceive", (event) => {
                                                                        console.log('New sms Received: ',event);
                                                });

                                         return () => SmsReceiverEventEmitter.removeAllListeners('sms_onReceive');
                        } else {
                            console.warn("SmsReceiverModule is not available.");
                        }

            },[]);

                    return null;
}