package com.bridgelabz.activitylifecycle;

import android.net.ConnectivityManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import  android.util.Log;
public class MainActivity extends AppCompatActivity {

    public static final String TAG = "Myactivity";
    @Override

    // when creates the activity oncreate will call
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.d(TAG," Calling OnCreate");
    }

    // when start the activity onstart will call
    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, " Calling on Start");
    }


//when pausing the activity on resume will call
    @Override
    protected void onResume(){
        super .onResume();
        Log.d(TAG," Calling onresume");

    }

    // while restarting the onRestart function will call
    @Override
    protected void onRestart(){
        super.onRestart();
        Log.d(TAG," Calling ON Start");
    }

    // when pausing the activity this function will call
    @Override
            protected void onPause(){
        super.onPause();
        Log.d(TAG," Calling On PauseMethod");
    }
    // when stops the activity onStop method will call
    @Override
            protected void onStop(){
        super.onStop();
        Log.d(TAG," Calling On Stop Method");

    }
    //function for Destroy
    @Override
            protected void onDestroy(){
        super.onDestroy();
        Log.d(TAG,"Calling on DEstroy Method");
    }

    // when Back Pressed this function will call
    @Override
    public void onBackPressed() {
            super.onBackPressed();
        Log.d(TAG, "onBackPressed() called with: " + "");
    }



}




