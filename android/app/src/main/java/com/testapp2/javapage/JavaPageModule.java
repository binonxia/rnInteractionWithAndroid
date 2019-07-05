package com.testapp2.javapage;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class JavaPageModule extends ReactContextBaseJavaModule {

  public JavaPageModule(ReactApplicationContext reactContext) {
            super(reactContext);
        }
        @Override
        public String getName() {
            return "JavaPageExample";
        }

        @ReactMethod
        public void startActivityFromJS(String name, String params){
            try{
                Activity currentActivity = getCurrentActivity();
                if(null!=currentActivity){
                    Class toActivity = Class.forName(name);
                    Intent intent = new Intent(currentActivity,toActivity);
                    intent.putExtra("params", params);
                    currentActivity.startActivity(intent);
                }
            }catch(Exception e){
                throw new JSApplicationIllegalArgumentException(
                        "不能打开Activity : "+e.getMessage());
            }
        }
}