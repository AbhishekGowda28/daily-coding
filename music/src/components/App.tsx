import React from "react";
import { API_KEY } from "../constants/secrets";
import { youtubeBaseURL } from "../constants/urls";
import { get } from "../services/agent";
import '../styles/App.css';

function App() {
  const items: any[] = [];
  const key = API_KEY.substr(3, 39);
  console.log(key, API_KEY);
  // get(`${youtubeBaseURL}?key=${key}`).then(response => { console.log(response) });
  get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM}`).then(response => { console.log(response) });
  return (
    <div className="App">
      <section id="video">
        {items.map(item => item)}
      </section>
    </div>
  );
}

export default App;
