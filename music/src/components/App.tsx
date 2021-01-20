import { GoogleLogin } from 'react-google-login';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <GoogleWithLogin />
    </div>
  );
}

export default App;

function GoogleWithLogin() {
  function onLoginSuccess(response: any) {
    console.log(response);
  }
  function onLoginFailure(response: any) {
    console.log(response);
  }
  return (
    <GoogleLogin
      clientId="550963546957-rhos917qpok76esjf20qn9d05gbj86gu.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onLoginSuccess}
      onFailure={onLoginFailure}
    />
  )
}