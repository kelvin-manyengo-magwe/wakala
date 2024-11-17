import React, { useState, useEffect } from 'react';
import BackgroundFetch from 'react-native-background-fetch';
import { ReadSms } from '../SmsCatcher/ReadSms';


const BackgroundRunning = (): null => {

        useEffect(() => {
                 //configuring background fetch
                  const configureBackgroundFetch = async () => {
                             const onEvent = async (taskId) => {
                                           console.log(`[BackgroundFetch] task: `, taskId);

                                               //doing the background task
                                                   ReadSms();
                                                     //signal the OS that background task is finish
                                                        BackgroundFetch.finish(taskId);
                                               };

                                               //to stop the background task when exceeded the time limit
                                               const timeOut = async (taskId) => {
                                                            console.log(`[BackgroundFetch] Timeout task: `, taskId);

                                                            BackgroundFetch.finish(taskId);
                                               };


                                               try {
                                                    const status = await BackgroundFetch.configure({minimumFetchInterval: 1}, onEvent, timeOut);

                                                    console.log(`[BackgroundFetch] configure status: `, status);
                                               } catch(error) {
                                                       console.log(`Background fetch configuration error: `, error);
                                               }
                  };
        },[]);

        return null;
}

export default BackgroundRunning;