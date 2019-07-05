package com.testapp2.javapage;

/**
 * Created by chunmeixia on 04/07/2019.
 */


import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Button;
import android.widget.Toast;

import com.testapp2.R;
import com.testapp2.TestApp1Activity;

public class JavaPage extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String params = getIntent().getStringExtra("params");


        Toast.makeText(this,"RN页面你这个家伙给我传的啥玩意!"+params,Toast.LENGTH_LONG).show();
        Log.i("gsc","RN页面你这个家伙给我传的啥玩意!"+params);

        setContentView(R.layout.javapage);

        TextView tv = (TextView)findViewById(R.id.text);
        tv.setText(params);

    }

    /** Called when the user taps the Send button */
    public void toRN(View view ) {

        Button  button = (Button) findViewById(R.id.button);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(JavaPage.this, TestApp1Activity.class);
                  intent.putExtra("name","Test");
                  intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
            }
        });

    }
}
