package com.wakala_app;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import android.content.IntentFilter;
import com.facebook.react.bridge.ReactMethod;


public class SmsReceiverModule extends ReactContextBaseJavaModule {

    private SmsReceiver smsReceiver; //custom variable from the SmsReceiver class

    public SmsReceiverModule(ReactApplicationContext reactContext) {
        super(reactContext);  //passes the reactContext to ReactContextBaseJavaModule

        this.smsReceiver = new SmsReceiver(reactContext);
        registerReceiver();  //registering receiver to listen to new incomming messages
    }

    @Override
    public String getName() {
        return "SmsReceiver"; // the name used to access the module in javascript
    }


    private void registerReceiver() {
        IntentFilter filter = new IntentFilter("android.provider.Telephony.SMS_RECEIVED");      //Listen to system broadcast intent where sms is received
        getReactApplicationContext().registerReceiver(smsReceiver, filter);
    }

    //exposing the methods to the javascript part for calling them

    @ReactMethod
    public void startReceiver() {
            //for starting the receiver
        registerReceiver();
    }

    @ReactMethod
    public void stopReceiver() {
        getReactApplicationContext().unregisterReceiver(smsReceiver);
    }

}