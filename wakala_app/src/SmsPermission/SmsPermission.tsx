import { PermissionsAndroid, Platform } from 'react-native';
import React from 'react';

const SmsPermission = async (): Promise<boolean> => {
    if(Platform.OS === 'android') {
            try {
                    const hasPermission= await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_SMS);
                        if(hasPermission) {
                                console.log('Sms permissions is already granted.');
                                return true;
                            }
                            const granted = await PermissionsAndroid.request(
                                        PermissionsAndroid.PERMISSIONS.READ_SMS,
                                            {
                                                   title: 'Sms Permission',
                                                   message: 'This app needs to access your sms messages',
                                                   buttonNeutral: 'Ask me later',
                                                   buttonNegative: 'Cancel',
                                                   buttonPositive: 'Ok'
                                            }
                                            );

                                            if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                                                    console.log('Sms Permissions Granted.');
                                                    return true;
                                            } else {
                                                    console.log('Sms Permission denied.');
                                                    return false;
                                            }
            }
                catch(err) {
                        console.log('Sms Permission Error: ', err);
                        return false;
                    }
        }

}

export default SmsPermission;