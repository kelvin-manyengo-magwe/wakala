package com.wakala_app;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import android.content.IntentFilter;
import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

import com.wakala_app.SmsReceiverModule;

public class SmsReceiverModule extends ReactContextBaseJavaModule {

    private SmsReceiver smsReceiver; //custom variable from the SmsReceiver class

    private boolean isReceiverRegistered = false;  // to track the state of registering process

    public SmsReceiverModule(ReactApplicationContext reactContext) {
        super(reactContext);  //passes the reactContext to ReactContextBaseJavaModule

        this.smsReceiver = new SmsReceiver(reactContext);
        registerReceiver();  //registering receiver to listen to new incomming messages
    }

    @Override
    public String getName() {
        return "SmsReceiverModule"; // the name used to access the module in javascript
    }


    private void registerReceiver() {
        if(!isReceiverRegistered) {
                IntentFilter filter = new IntentFilter("android.provider.Telephony.SMS_RECEIVED");      //Listen to system broadcast intent where sms is received
                getReactApplicationContext().registerReceiver(smsReceiver, filter);
                isReceiverRegistered = true;

                Log.d("SmsReceiverModule","Sms Receiver successfully registered.");
        }
    }

    //exposing the methods to the javascript part for calling them

    @ReactMethod
    public void startReceiver() {
            //for starting the receiver
        registerReceiver();
    }

    @ReactMethod
    public void stopReceiver() {
            if(isReceiverRegistered) {
                getReactApplicationContext().unregisterReceiver(smsReceiver);
                isReceiverRegistered = false;

                Log.d("SmsReceiverModule","Sms Receiver unregistered at stopReceiver() f(x).");
            }
    }

    @ReactMethod
    public void addListener(String eventName) {
        //for adding listeners
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        //for removing listeners
    }

}