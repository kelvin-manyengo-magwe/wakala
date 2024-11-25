import React, { useEffect } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';


export const SmsOnReceiveEvent = () => {

            useEffect(() => {
                    const SmsReceiverModule = NativeModules.SmsReceiver;  //smsReceiver module to bridge gap from javascript

                        if(SmsReceiverModule) {
                                const SmsReceiverEventEmitter = new SmsReceiverEventEmitter(SmsReceiverModule);

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