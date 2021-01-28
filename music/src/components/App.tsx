import React from "react";
import '../styles/App.css';
import { GoogleLogin } from "./google";
import { LoginWithSoundCloud } from "./soundCloud";


function App() {
  return (
    <div className="App">
      <GoogleLogin />
      <LoginWithSoundCloud />
    </div>
  );
}

export default App;
