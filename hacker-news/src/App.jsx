import React from 'react';
import { NewStoryIds } from "./components/NewStoryIds";
import { Credits } from './components/Credits';
import { Title } from './components/Title';


function App() {

  return (
    <div className="App">
      <Credits />
      <Title />
      <NewStoryIds />
    </div>
  );
}

export { App };
