import React, { useEffect, useState } from 'react';
import { NativeModules, NativeEventEmitter } from 'react-native';


export const SmsOnReceiveEvent = () => {

            useEffect(() => {
                    const  { SmsReceiverModule } = NativeModules;  //smsReceiver module to bridge gap from javascript

                                console.log(SmsReceiverModule);
                        if(SmsReceiverModule) {
                                const SmsReceiverEventEmitter = new NativeEventEmitter(SmsReceiverModule);
                                            console.log(SmsReceiverEventEmitter);

                                        SmsReceiverEventEmitter.addListener("sms_onReceive", (sms) => {
                                                                        console.log('New sms Received: ',sms);
                                                });

                                         return () => SmsRe+ceiverEventEmitter.removeAllListeners('sms_onReceive');
                        } else {
                            console.warn("SmsReceiverModule is not available.");

                        }

            },[]);

                    return null;
}


