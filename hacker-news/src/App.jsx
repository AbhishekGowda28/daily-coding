import React from 'react';
import { NewStoryIds } from "./containers/NewStoryIds";
import { Credits } from './components/Credits';


function App() {

  return (
    <div className="App">
      <NewStoryIds />
      <Credits />
    </div>
  );
}

export { App };
