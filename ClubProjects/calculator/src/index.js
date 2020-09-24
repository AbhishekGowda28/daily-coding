import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import './index.css';
import App from './App';
import { calculatorStore } from './store/sample';

ReactDOM.render(
  <React.StrictMode>
    <Provider strore={applyMiddleware (calculatorStore)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);