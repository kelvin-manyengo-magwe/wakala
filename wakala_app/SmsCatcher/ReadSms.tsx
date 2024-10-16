import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import SmsAndroid from 'react-native-get-sms-android';
import SmsPermission from './SmsPermission';
import { SmsListener } from './SmsListener';




export const ReadSms =  () => {

const [messages, setmessages] = useState<string[]>([]);


    const startReadSms = async () => {
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

                                                        SmsAndroid.list(
                                                            JSON.stringify(filter),
                                                                (fail) => {
                                                                        console.log('Failed to read sms messages', fail);
                                                                    },
                                                                (count, smsList) => {
                                                                        const messageArray = JSON.parse(smsList);
                                                                            console.log(messageArray);

                                                                                setmessages(messageArray);
                                                                    }
                                                            );
            }

            useEffect(()=> {

                    //setting up polling to check sms after 5sec
                    const intervalId= setInterval(() => {
                            startReadSms();
                    }, 5000);

                        //clearing interval when components unmounts
                            return () => clearInterval(intervalId);
                },[]);

        return (
                    <View style={styles.messageContent}>
                            {messages.length > 0 ?
                                    <SmsListener messages={messages} setmessages={setmessages} />
                                :
                                    (
                                        <Text>No text messages available</Text>
                                    )}
                    </View>
            )
    }


 const styles = StyleSheet.create({
        messageContent: {
            display: 'flex',
            alignItems: 'center'
        }
    });