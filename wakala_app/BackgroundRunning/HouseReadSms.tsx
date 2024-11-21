import React from 'react';
import { ReadSms } from '../SmsCatcher/ReadSms';
import BackgroundService from 'react-native-background-actions';


        const consoleDebug = (message) => {
                   console.log(`[DEBUG] ${message}`);
        };

export const HouseReadSms = async(taskData) => {
              consoleDebug(`HouseReadSms component mounts.`);

              const { delay } = taskData;

            while(!BackgroundService.isRunning) {
                    consoleDebug(`Waiting the HouseReadSms background to start...`);
                    await new Promise((resolve) => setTimeout(resolve,100));

                        //after the promise resolve is true
                    consoleDebug(`The background Sms monitoring service is running ...`);
            }

        while(BackgroundService.isRunning()) { //if the background task is running

            try {
                        //The read sms returning the array of messages
                    const receiveSms= await ReadSms();

                    if(receiveSms && receiveSms.length > 0) {
                                consoleDebug(`New sms received: ${JSON.stringify(receiveSms)}`);

                             //processing the message store to server / locally
                    } else {
                            consoleDebug(`No new Sms messages received`);
                    }


            } catch(error) {
                    consoleDebug(`Error in setting HouseReadSms: ${error}`);
            } finally {
                            //introduction of delay before checking next sms
                               await new Promise((resolve) => setTimeout(resolve, delay));
                      }
        }

        consoleDebug(`HouseReadSms background task stopped.`);

        return Promise.resolve();
};