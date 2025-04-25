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

                if("android.provider.Telephony.SMS_RECEIVED".equals(intent.getAction()))      //avoiding null pointer exception
                {
                        Bundle bundle = intent.getExtras();


                        if(bundle != null) {
                               try {
                                       Object[] pdus = (Object[]) bundle.get("pdus");  //pdus protocol data units(raw form of data of sms messages)

                                                if(pdus == null || pdus.length == 0) return;

                                                StringBuilder fullMessage = new StringBuilder();
                                                String senderAddress = null;

                                       String format = bundle.getString("format");

                                       for(Object pdu: pdus) {          //looping through each pdu
                                               SmsMessage sms;

                                               if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                                                       sms = SmsMessage.createFromPdu((byte[]) pdu, format); // <- use format
                                               } else {
                                                       sms = SmsMessage.createFromPdu((byte[]) pdu); // <- fallback for older Android
                                               }

                                               if(senderAddress == null) {
                                                        senderAddress = sms.getOriginatingAddress();
                                               }

                                               fullMessage.append(sms.getMessageBody());

                                       }



                                               //by use of writable map to transfer data to javascript frontend
                                               WritableMap eventData = Arguments.createMap(); //creating empty string of writable map

                                               eventData.putString("body", fullMessage.toString());
                                               eventData.putString("address", senderAddress);

                                               Log.d(TAG, "Full Message received: " + fullMessage);
                                               Log.d(TAG, "Sender address: " + senderAddress);

                                               sendEventToReact(SMS_RECEIVED_EVENT, eventData);

                               } catch(Exception e) {
                                       Log.e(TAG, "Exception: " + e.getMessage(),e);
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