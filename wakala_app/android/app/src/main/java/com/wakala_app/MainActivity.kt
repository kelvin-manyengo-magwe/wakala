package com.wakala_app

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.wakala_app.utils.ContentResolver.QuerySms
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "wakala_app"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // Directly call the SMS reading logic
    readSmsMessages()
  }

  private fun readSmsMessages() {
    val querySms = QuerySms(this) // Create an instance of the Java class
    val smsList = querySms.getAllSms()

    if (smsList.isNotEmpty()) {
      Toast.makeText(this, "Read ${smsList.size} SMS messages.", Toast.LENGTH_SHORT).show()
      // Log all SMS for debugging
      for (sms in smsList) {
        Log.d("MainActivity", "SMS: $sms")
      }
    } else {
      Toast.makeText(this, "No SMS messages found.", Toast.LENGTH_SHORT).show()
    }
  }
}
