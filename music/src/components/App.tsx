import React from "react";
import '../styles/App.css';
import { GoogleLogin } from "./google";

const API_KEY = "###AIzaSyAZQF38Vrk9IDqoS__wtMIjJC4exSqb-Ao###";

function App() {
  const items: any[] = [];
  return (
    <div className="App">
      <section id="video">
        {items.map(item => item)}
      </section>
    </div>
  );
}

export default App;
