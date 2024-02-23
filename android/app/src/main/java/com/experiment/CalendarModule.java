package com.experiment;

import android.annotation.SuppressLint;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    public CalendarModule(@Nullable ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    // add to CalendarModule.java
    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void sayHello(String name, Callback callback) {
        try{
            String message = "Hello " + name;
            callback.invoke(null, message);
        }catch (Exception e) {
            callback.invoke(e, null);
        }
    }

    @ReactMethod
    public void fullName(String firstName, String lastName, Callback callback) {
        try {
            String fullName = firstName + " " + lastName;
            callback.invoke(null, fullName);
        } catch (Exception e) {
            callback.invoke(e.toString(), null);
        }
    }

    @ReactMethod
    public void getDeviceId(Promise promise) {
        try {
            @SuppressLint("HardwareIds") String androidId = Settings.Secure.getString(reactContext.getContentResolver(),
                    Settings.Secure.ANDROID_ID);
            promise.resolve(androidId);
        } catch (Exception e) {
            promise.reject("Error", e);
        }
    }

    @ReactMethod
    public void showToast (String toast){
        Toast.makeText(reactContext, toast, Toast.LENGTH_LONG).show();
    }
}
