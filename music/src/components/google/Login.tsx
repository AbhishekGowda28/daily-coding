import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { googleClientID } from "../../constants/secrets";

interface GoogleLoginProps {
    signedIn(loginStatus: boolean): void;
    loginTokens(result: GoogleLoginResponse | GoogleLoginResponseOffline): void;
}

export function GoogleWithLogin(props: GoogleLoginProps) {
    function onLoginSuccess(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
        props.loginTokens(response);
        props.signedIn(true);
    }
    function onLoginFailure(response: any) {
        props.signedIn(false);
    }
    return (
        <GoogleLogin
            clientId={googleClientID}
            buttonText="Login with google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            theme="light"
            scope={"https://www.googleapis.com/auth/youtube"}
        />
    )
}

