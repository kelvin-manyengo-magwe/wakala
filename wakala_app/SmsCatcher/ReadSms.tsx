import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import SmsAndroid from 'react-native-get-sms-android';
import SmsPermission from './SmsPermission';


const [messages, setmessages] = useState<string[]>([]);


export const ReadSms =  () => {

    const startReadSms = async () => {
                const permissionGRanted= await SmsPermission();
                        if(!permissionGRanted) {
                                Alert.alert("Permission Denied","Unable to read sms messages without permission");
                                return;
                            }

                                        const filter = {
                                                        box: 'inbox',
                                                        read: 0
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
                        startReadSms();
                },[]);

        return (
                    <View style={styles.messageContent}>
                            {messages.length > 0 ?
                                (messages.map((message, index)=> (
                                      <Text key={index}>
                                            {message.body}
                                      </Text>
                                ))):
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