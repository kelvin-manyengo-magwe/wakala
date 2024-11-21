package com.wakala_app

import android.content.BroadcastReceiver;
import com.facebook.react.bridge.ReactApplicationContext;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

public class SmsReceiver extends BroadcastReceiver {

        private static final String SMS_RECEIVED_EVENT = "sms_onReceive";
        private ReactApplicationContext reactContext;   //react-native functionality to emit event for javascript functionality

        //a sms receiver constructor
        public SmsReceiver(ReactApplicationContext) {
                this.reactContext = reactContext;
        }

        @override
        public void onReceive(Context context, Intent intent) {
                if(intent.getAction().equals("android.provider.Telephony.SMS_RECEIVED")) {
                        Bundle bundle = intent.getExtras();
                }
        }

}