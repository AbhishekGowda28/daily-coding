import React, { useState } from 'react';
import "./calculator.css"
export function Calculator() {

  const [previousState, setPreviousState] = useState("");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  return (
    <div className="calculator">
      <div className="calculation">{previousState}</div>
      <div className="result">{result}</div>
      <div className="controls">
        <div className="row">
          <div className="control" onClick={() => {
              setPreviousState("");
              setResult(0);
              setOperator("");
            }}>C</div>
          <div className="control">+/-</div>
          <div className="control">%</div>
          <div className="control">&divide;</div>
        </div>
        <div className="row">
          <div className="control">7</div>
          <div className="control">8</div>
          <div className="control">9</div>
          <div className="control">&times;</div>
        </div>
        <div className="row">
          <div className="control">4</div>
          <div className="control">5</div>
          <div className="control">6</div>
          <div className="control">&minus;</div>
        </div>
        <div className="row">
          <div className="control">1</div>
          <div className="control">2</div>
          <div className="control">3</div>
          <div className="control">+</div>
        </div>
        <div className="row">
          <div className="control zero">0</div>
          <div className="control">.</div>
          <div className="control equals">=</div>
        </div>
      </div>
    </div>
  );
}
