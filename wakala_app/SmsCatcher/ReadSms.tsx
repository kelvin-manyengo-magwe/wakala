import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import SmsAndroid from 'react-native-get-sms-android';
import SmsPermission from './SmsPermission';
import { SmsListener } from './SmsListener';




export const ReadSms = async () => {


                const permissionGRanted= await SmsPermission();
                        if(!permissionGRanted) {
                                Alert.alert("Permission Denied","Unable to read sms messages without permission");
                                return;
                            }

                                        const filter = {
                                                        box: 'inbox', // for the receive sms
                                                        read: 0, //0 for unread,1 for red
                                                        maxCount: 1, // fetch most recent messages
                                                    };



                //ReadSms component to return either a promise or value
        return new Promise((resolve,reject) => {
                    SmsAndroid.list(
                            JSON.stringify(filter),
                                (fail) => {
                                    console.log(`Failed to read sms messages`, fail);
                                            //if the promise fail
                                    reject(fail);
                                },
                                (count, smsList) => {
                                           const messageArray = JSON.parse(smsList);
                                           console.log(messageArray);
                                                //resolve method called after success promise
                                            resolve(messageArray);
                                }
                    );
        });

    }


 const styles = StyleSheet.create({
        messageContent: {
            display: 'flex',
            alignItems: 'center'
        }
    });