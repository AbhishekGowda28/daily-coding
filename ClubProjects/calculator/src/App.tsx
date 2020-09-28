import React from 'react';
import './App.css';
import { Calculator } from './features/calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Calculator</div>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
