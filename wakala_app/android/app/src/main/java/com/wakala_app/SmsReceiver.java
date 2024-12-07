package com.wakala_app;

import android.content.BroadcastReceiver;
import com.facebook.react.bridge.ReactApplicationContext;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import android.telephony.SmsMessage;
import android.util.Log;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.modules.core.DeviceEventManagerModule;


public class SmsReceiver extends BroadcastReceiver {

        private static final String SMS_RECEIVED_EVENT = "sms_onReceive";
        private static final String TAG = "SmsReceiver";
        private ReactApplicationContext reactContext;   //react-native functionality to emit event for javascript functionality

        //a constructor reactContext subclass to use reactContext data pass

                //no argument constructor is required in broadcast receiver
        public SmsReceiver() {

                Log.d(TAG, "Sms receiver component is starting....");
        }

        public void setReactContext(ReactApplicationContext reactContext) {
                this.reactContext = reactContext;
                Log.d(TAG, "The ReactApplicationContext is set in SmsReceiver.");
        }

        @Override
        public void onReceive(Context context, Intent intent) {
                        Log.d(TAG, "onReceive method is triggered...");

                if(intent.getAction().equals("android.provider.Telephony.SMS_RECEIVED")) {
                        Bundle bundle = intent.getExtras();


                        if(bundle != null) {
                               try {
                                       Object[] pdus = (Object[]) bundle.get("pdus");  //pdus protocol data units(raw form of data of sms messages)
                                       SmsMessage[] messages = new SmsMessage[pdus.length];

                                       for(int i = 0; i < pdus.length; i++) {
                                               messages[i] = SmsMessage.createFromPdu((byte[]) pdus[i]);

                                       }

                                       for(SmsMessage message: messages) {
                                               String messageBody = message.getMessageBody();
                                               String origninalAddress = message.getOriginatingAddress();

                                               //by use of writable map to transfer data to javascript frontend
                                               WritableMap eventData = Arguments.createMap(); //creating empty string of writable map

                                               eventData.putString("body", messageBody);
                                               eventData.putString("address", origninalAddress);

                                               Log.d(TAG, "Sms received: " + messageBody);
                                               Log.d(TAG, "Sender address: " + origninalAddress);

                                               sendEventToReact(SMS_RECEIVED_EVENT, eventData);
                                       }
                               } catch(Exception e) {
                                       Log.e(TAG, "Exception: " + e.getMessage());
                               }
                        }
                }
        }

        private void sendEventToReact(String SMS_RECEIVED_EVENT, WritableMap eventData) {
                ReactContext reactContext = this.reactContext;


                if(reactContext != null && reactContext.hasActiveCatalystInstance()) {
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                .emit(SMS_RECEIVED_EVENT, eventData);
                }  else {
                        if(reactContext == null) {
                                Log.e(TAG, "React Context Value is empty");
                        } else if(!reactContext.hasActiveCatalystInstance()) {
                                Log.w(TAG, "React Context does not have active react native runtime");
                        }
                }
        }

}