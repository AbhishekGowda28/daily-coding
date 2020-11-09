import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Movie } from './features/movie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Movie />
      </header>
    </div>
  );
}

export default App;
