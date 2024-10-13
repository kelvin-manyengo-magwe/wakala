import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import SmsAndroid from 'react-native-get-sms-android';


export const ReadSms = () => {
        const [messages, setmessages] = useState([]);

               useEffect(()=> {
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
                    },[]);
        return (
                    <View style={styles.messageContent}>
                            {messages.map((message, index)=> (
                                      <Text key={index}>
                                            {message.body}
                                      </Text>
                                ))}
                    </View>
            )
    }



 const styles = StyleSheet.create({
        messageContent: {
            display: 'flex',
            alignItems: 'center'
        }
    });