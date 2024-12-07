package com.wakala_app

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.wakala_app.utils.ContentResolver.QuerySms

class MainActivity : ReactActivity() {

    companion object {
        private const val PERMISSION_REQUEST_SMS = 1
    }

    override fun getMainComponentName(): String = "wakala_app"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
            DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Check and request SMS permissions
        if (hasSmsPermission()) {
            readSmsMessages()
        } else {
            requestSmsPermission()
        }
    }

    private fun hasSmsPermission(): Boolean {
        return ContextCompat.checkSelfPermission(this, Manifest.permission.READ_SMS) == PackageManager.PERMISSION_GRANTED &&
                ContextCompat.checkSelfPermission(this, Manifest.permission.RECEIVE_SMS) == PackageManager.PERMISSION_GRANTED
    }

    private fun requestSmsPermission() {
        ActivityCompat.requestPermissions(
                this,
                arrayOf(Manifest.permission.READ_SMS, Manifest.permission.RECEIVE_SMS),
                PERMISSION_REQUEST_SMS
        )
    }

    override fun onRequestPermissionsResult(
            requestCode: Int,
            permissions: Array<out String>,
            grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)

        if (requestCode == PERMISSION_REQUEST_SMS) {
            if (grantResults.isNotEmpty() && grantResults.all { it == PackageManager.PERMISSION_GRANTED }) {
                Toast.makeText(this, "SMS permissions granted.", Toast.LENGTH_SHORT).show()
                readSmsMessages()
            } else {
                Toast.makeText(this, "SMS permissions are required to read messages.", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun readSmsMessages() {
        Log.d("MainActivity", "Started Reading SMS messages")

        try {
            val querySms = QuerySms(this) // Create an instance of the Java class
            val smsList = querySms.getAllSms()

            if (smsList.isNotEmpty()) {
                Toast.makeText(this, "Read ${smsList.size} SMS messages.", Toast.LENGTH_SHORT).show()

                for ((index, sms) in smsList.withIndex()) {
                    Log.d("MainActivity", "SMS #$index: $sms")
                }
            } else {
                Toast.makeText(this, "No SMS messages found.", Toast.LENGTH_SHORT).show()
            }

        } catch (e: SecurityException) {
            Log.e("MainActivity", "Permission issue while reading SMS: ${e.message}", e)
            Toast.makeText(this, "Permission issue. Please grant SMS permissions.", Toast.LENGTH_SHORT).show()

        } catch (e: Exception) {
            Log.e("MainActivity", "Error while reading SMS messages: ${e.message}", e)
            Toast.makeText(this, "Error reading SMS. Check logs for details.", Toast.LENGTH_SHORT).show()
        }
    }
}
