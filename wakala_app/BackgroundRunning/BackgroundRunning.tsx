import React, { useState, useEffect } from 'react';
import BackgroundService from 'react-native-background-actions';
import { ReadSms } from '../SmsCatcher/ReadSms';


const BackgroundRunning = (): null => {

       const sleep = (time) => { // function to make the sleep success of promise periodically for long running background task
                new Promise((resolve) => setTimeout(()=> resolve(),time)
       } ; //the only success part of the promise

        const veryIntenseTask = async(taskDataArguments) => {
                    const { delay } = taskDataArguments;

                    await new Promise( async(resolve) => {
                        for(i= 0; BackgroundService.isRunning(); i++) {
                                console.log(i);
                                ReadSms();
                                await sleep(delay);
                        }
                    });
        };

        const options = {
            taskName: 'Sms BackgroundService',
            taskTitle: 'Wakala Background service',
            taskDesc: 'Running Background sms service',
            taskIcon: {
                name: 'ic_launcher',
                type: 'mipmap',
            },
            color: '#ff00ff',
            linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
            parameters: {
                delay: 1000,
            },
        };


        await BackgroundService.start(veryIntensiveTask, options);
        await BackgroundService.updateNotification({taskDesc: 'New ExampleTask description'}); // Only Android, iOS will ignore this call
        // iOS will also run everything here in the background until .stop() is called
        await BackgroundService.stop();


        return null;
}

export default BackgroundRunning;