import React, { useState, useEffect } from 'react';
import BackgroundService from 'react-native-background-actions';
import HouseReadSms from './HouseReadSms';
import { ReadSms } from '../SmsCatcher/ReadSms';


        const debugLog = (message) => {
                console.log(`[DEBUG] ${message}`);
        };


const BackgroundRunning = (): null => {

        debugLog('Background Running component mounted');



            useEffect(() => {
                    const startBackgroundService = async() => {
                                        const options = {
                                                         taskName: 'Sms BackgroundService',
                                                         taskTitle: 'Wakala Background service', //notification title
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


                            try {
                                             debugLog(`Attemping to start the background service.`);

                                          // await BackgroundService.start(HouseReadSms, options);

                                            debugLog(`BackgroundService started successfully`);

                                         // await BackgroundService.updateNotification({taskDesc: 'Sms Background Service notification updated.'}); // Only Android, iOS will ignore this call
                                              debugLog(`Backgroundservice notification updated successfully`);
                                                                    // iOS will also run everything here in the background until .stop() is called
                            } catch(error) {
                                    debugLog(`Error on starting BackgroundService async request: ${error}`);
                            }
                    };

                    startBackgroundService();
            },[]);


        return null;
}

export default BackgroundRunning;