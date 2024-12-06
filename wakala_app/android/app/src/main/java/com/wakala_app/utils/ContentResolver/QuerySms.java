package com.wakala_app.utils.ContentResolver;

import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.util.Log;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class QuerySms {

    public final Context context;

    public QuerySms(Context context) {
        this.context = context; // constructor for declaring and pass context
    }

    public List<HashMap<String, String>> getAllSms() {  //returning the hashmap results

        List<HashMap<String, String>> smsList = new ArrayList<>(); //creating the empty array of hashMap

        //pointing the Uri to the sms inbox content
        Uri smsUri = Uri.parse("content://sms/inbox");

        String[] smsDetails = {"id","address","body","date"};

        try(Cursor cursor = context.getContentResolver().query(smsUri, smsDetails, null, null, "date DESC")) {
                if(cursor != null) { //sms were found
                        HashMap<String, String> sms = new HashMap<>();  //creating new hash map

                    sms.put("id", cursor.getString(cursor.getColumnIndexOrThrow("_id")));
                    sms.put("sender", cursor.getString(cursor.getColumnIndexOrThrow("address")));
                    sms.put("message", cursor.getString(cursor.getColumnIndexOrThrow("body")));
                    sms.put("date", cursor.getString(cursor.getColumnIndexOrThrow("date")));

                        smsList.add(sms);

                        Log.d("QuerySms","ID: " + sms.get("id") +
                                "       Sender: " + sms.get("sender") +
                                "       Message: " + sms.get("message") +
                                "       Date: " + sms.get("date"));
                } else {
                        Log.d("QuerySms", "No Sms messages found");
                }

        } catch (Exception e) {
                Log.e("QuerySms","Error querying sms messages: " + e.getMessage(), e);
        }

        return smsList;

    }
}