/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SmsPermission from './SmsCatcher/SmsPermission';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, ScrollView, StatusBar, Alert, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { ReadSms } from './SmsCatcher/ReadSms';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import StackNavigator from './navigation/StackNavigator';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {


        useEffect(() =>{
                const checkPermission= async () => {
                        const isPermissionGranted = await SmsPermission();
                                if(isPermissionGranted) {
                                        Alert.alert("Permission is successfully granted.","You can now read sms messages");
                                        console.log("Permission is successfully granted")
                                    } else {
                                        Alert.alert("Permission Denied","You cannot read sms messages.");
                                        console.log("Permission Denied");
                                    }
                };

                    checkPermission();
        }, []);

        ReadSms();

  return (
        <>
                <StackNavigator />
        </>
  );
}

const styles = StyleSheet.create({
    centerContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f5fa',
    }
});

export default App;
