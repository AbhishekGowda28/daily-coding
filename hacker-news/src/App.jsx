import React from 'react';
import { NewStoryIds } from "./containers/NewStoryIds";
import { Credits } from './components/Credits';


function App() {

  return (
    <div className="App">
      <Credits />
      <NewStoryIds />
    </div>
  );
}

export { App };
