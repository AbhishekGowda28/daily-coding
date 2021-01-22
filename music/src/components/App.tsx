import React from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login';
import { googleClientID } from "../constants/secrets";
import '../styles/App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div className="App">
      {loggedIn ? <GoogleLogout clientId={googleClientID} onLogoutSuccess={() => { setLoggedIn(false) }} /> :
        <GoogleWithLogin
          signedIn={(status: boolean) => { setLoggedIn(status) }}
          loginTokens={(result: GoogleLoginResponse) => {
            console.log(result);
          }}
        />}
    </div>
  );
}

export default App;
interface GoogleLoginProps {
  signedIn: Function;
  loginTokens: Function;
}
function GoogleWithLogin(props: GoogleLoginProps) {
  function onLoginSuccess(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
    props.loginTokens(response);
    props.signedIn(true);
  }
  function onLoginFailure(response: any) {
    console.error(response);
    props.signedIn(false);
  }
  return (
    <GoogleLogin
      clientId={googleClientID}
      buttonText="Login with google"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
      theme="light"
    />
  )
}