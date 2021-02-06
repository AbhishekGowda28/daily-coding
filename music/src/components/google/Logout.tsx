import { GoogleLogout } from "react-google-login"
import { googleClientID } from "../../constants/secrets"

interface LogOutOfGoogleProps {
    onSucessfulLogout(logoutStatus: boolean): void;
}
export function LogOutOfGoogle(props: LogOutOfGoogleProps) {
    console.log("Logout");
    return (
        <GoogleLogout
            clientId={googleClientID}
            onLogoutSuccess={() => { props.onSucessfulLogout(false) }}
        />
    )
}