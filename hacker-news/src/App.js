import React from 'react';
import { getNewStories } from "./services/api";


function App() {
  getNewStories();
  return (
    <div className="App">
      Hacker NEWS
    </div>
  );
}

export { App };
