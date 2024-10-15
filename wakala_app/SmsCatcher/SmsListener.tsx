import React, { useState, useEffect } from 'react';
import ReadSms from './ReadSms';
import SmsPermission from './SmsPermission';
import { PermissionsAndroid, Alert, DeviceEventEmitter } from 'react-native';

type SmsListenerProps = {
    messages: string,
    setMessages: React.Dispatch<React.SetStateAction<string[]>>
};

export const SmsListener = ({ messages, setMessages }: smsListenerProps) => {

         const handleIncomingSms = (sms) => {
                const message= sms.body;
                const address= sms.address;

                console.log(`Received new sms `, message, address);
                Alert.alert(`New sms`,`From: ${address}\nMessage: ${message}`);
                setMessages((prevMessages) => [...prevMessages, sms]);
         };



            useEffect(() => {
                    const setupListener = async () => {
                           const hasPermission= await SmsPermission();
                                    if(hasPermission) {
                                            console.log(`Listening for sms messages.`);
                                                DeviceEventEmitter.addListener(`sms_onReceive`,handleIncomingSms);
                                        }
                                };

                            setupListener();

                          //the clean up function for unmounting component
                            return () => {
                                    DeviceEventEmitter.removeListener('sms_onReceive',handleIncomingSms);
                                }
            },[]);

    return null;    // because the component perform the backend job

    }