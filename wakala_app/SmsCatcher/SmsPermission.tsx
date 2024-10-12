import { PermissionsAndroid, Platform } from 'react-native';


async function SmsPermission() {
    if(Platform.Os === 'android') {
            try {
                    const granted = await PermissionsAndroid.request(
                                PermissionsAndroid.Permissions.READ_SMS,
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
                                    } else {
                                            console.log('Sms Permission denied.');
                                    }
            }
                catch(err) {
                        console.warn('Sms Permission Error: ', err);
                    }
        }
}

export default SmsPermission;