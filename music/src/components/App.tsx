import React from "react";
import '../styles/App.css';
import { GoogleWithLogin } from "./google/Login";
import { LogOutOfGoogle } from "./google/Logout";


function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div className="App">
      <div className="authorize__google">
        {loggedIn ?
          <LogOutOfGoogle onSucessfulLogout={(logoutStatus) => { setLoggedIn(logoutStatus) }} /> :
          <GoogleWithLogin signedIn={(loginStatus) => { setLoggedIn(loginStatus) }} loginTokens={(result) => { console.log(result); }}
          />}
      </div>
    </div>
  );
}

export default App;
