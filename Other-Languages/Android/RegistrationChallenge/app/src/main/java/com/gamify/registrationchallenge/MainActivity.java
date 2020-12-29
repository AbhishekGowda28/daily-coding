package com.gamify.registrationchallenge;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void registerForm(View view){
        TextView firstName = findViewById(R.id.firstNameTxt),
                lastName = findViewById(R.id.lastNameTxt),
                email = findViewById(R.id.emailTxt);

        TextView firstView = findViewById(R.id.firstView),
                lastView = findViewById(R.id.lastView),
                emailView = findViewById(R.id.emailView);

        firstView.setText("First Name : " + firstName.getText().toString());
        lastView.setText("Last Name : " + lastName.getText().toString());
        emailView.setText("Email : " + email.getText().toString());
    }
}