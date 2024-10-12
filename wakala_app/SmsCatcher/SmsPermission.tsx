import { PermissionsAndroid, Platform } from 'react-native';


const SmsPermission = async () => {
    if(Platform.OS === 'android') {
            try {
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
                                    } else {
                                            console.log('Sms Permission denied.');
                                    }
            }
                catch(err) {
                        console.log('Sms Permission Error: ', err);
                    }
        }

        return false;
}

export default SmsPermission;