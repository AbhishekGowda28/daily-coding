import React from 'react';
import './App.css';
import { Discover } from './components/Discover';
// import { Movie } from './components/movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Movie /> */}
        <Discover />
      </header>
    </div>
  );
}

export default App;
