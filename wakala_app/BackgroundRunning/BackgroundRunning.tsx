import React, { useState, useEffect } from 'react';
import BackgroundService from 'react-native-background-actions';
import { ReadSms } from '../SmsCatcher/ReadSms';

        const debugLog = (message) => {
                console.log(`[DEBUG] ${message}`);
        }
const BackgroundRunning = (): null => {

        debugLog('Background Running component mounted');

            // function to make the sleep success of promise periodically for long running background task
       const sleep = (time) => new Promise((resolve) => setTimeout(()=> resolve(),time)); //the only success part of the promise


        const veryIntenseTask = async(taskDataArguments) => {
                    const { delay } = taskDataArguments;

                        debugLog(`Starting very intense task with: ` + delay);

                            console.log(BackgroundService.isRunning(),delay);

                            try {
                                        for(i= 0; BackgroundService.isRunning(); i++) {
                                                                        console.log(i);

                                                                      debugLog(`Readsms component running in background`);

                                                                        ReadSms();
                                                                        await sleep(delay);
                                                                }


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

                                                    debugLog(`Attemping to start the background service.`);
                                                 await BackgroundService.start(veryIntensiveTask, options);
                                                    debugLog(`BackgroundService started successfully`);

                                                 await BackgroundService.updateNotification({taskDesc: 'New ExampleTask description'}); // Only Android, iOS will ignore this call
                                                        debugLog(`Backgroundservice notification updated successfully`);
                                                                    // iOS will also run everything here in the background until .stop() is called
                            } catch(error) {
                                    debugLog(`Error starting background service: ${error}`);
                            }

        };




        return null;
}

export default BackgroundRunning;