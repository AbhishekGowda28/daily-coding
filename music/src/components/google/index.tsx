import React from "react";
import { GoogleWithLogin } from "./Login";
import { LogOutOfGoogle } from "./Logout";

export function GoogleLogin() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    return (
        <div className="authorize__google">
            {loggedIn ?
                <LogOutOfGoogle onSucessfulLogout={(logoutStatus) => { setLoggedIn(logoutStatus) }} /> :
                <GoogleWithLogin signedIn={(loginStatus) => { setLoggedIn(loginStatus) }} loginTokens={(result) => { console.log(result); }}
                />}
        </div>
    );
}