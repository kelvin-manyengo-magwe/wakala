import React, { useState, useEffect } from 'react';
import BackgroundFetch from 'react-native-background-fetch';
import { ReadSms } from '../SmsCatcher/ReadSms';


const BackgroundRunning = (): null => {

        useEffect(() => {
                 //configuring background fetch
                 BackgroundFetch.configure({
                    minimumFetchInterval: 15,  //Fetch every 1 minutes
                    stopOnTerminate: false,  //continue even after app is closed
                    startOnBoot: true,
                 },  async(taskId) => {
                            console.log(`[BackgroundFetch] taskId: `, taskId);

                            //performing the background tasks
                                ReadSms();

                            //calling the finish method when task is done
                                BackgroundFetch.finish(taskId);
                 }, (error) => {
                        console.log(`[BackgroundFetch] failed to start`, error);
                 });

                        //starting the background fetch
                            BackgroundFetch.start();

                            return () => {
                                    //stopping background fetch when component unmounts
                                    BackgroundFetch.stop();
                            }
        },[]);

        return null;
}

export default BackgroundRunning;