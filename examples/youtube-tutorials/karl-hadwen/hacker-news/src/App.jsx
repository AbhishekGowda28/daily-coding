import React from 'react';
import { StoriesContainer } from "./components/StoriesContainer";
import { Credits } from './components/Credits';
import { Title } from './components/Title';


function App() {

  return (
    <div className="App">
      <Credits />
      <Title />
      <StoriesContainer />
    </div>
  );
}

export { App };
