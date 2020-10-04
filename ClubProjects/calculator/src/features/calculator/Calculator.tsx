import React, { useState } from 'react';
import "./calculator.css"
export function Calculator() {

  const [previousState, setPreviousState] = useState("");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");
  const [sign, setSign] = useState("");

  const handleNumberInput = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const input = result.toString() + event.currentTarget.innerText;
    setResult(input);
  };

  const clearInput = () => {
    setPreviousState("");
    setResult("0");
    setOperator("");
    setSign("");
  };

  const toggleSign = () => {
    if (sign === "") {
      setSign("-")
    } else {
      setSign("");
    }
  };

  return (
    <div className="calculator">
      <div className="calculation">{previousState}</div>
      <div className="result">
        <span>{sign}</span>
        <span>{result}</span>
      </div>
      <div className="controls">
        <div className="row">
          <div className="control" onClick={clearInput}>C</div>
          <div className="control" onClick={toggleSign}>+/-</div>
          <div className="control">%</div>
          <div className="control">&divide;</div>
        </div>
        <div className="row">
          <div className="control" onClick={handleNumberInput}>7</div>
          <div className="control" onClick={handleNumberInput}>8</div>
          <div className="control" onClick={handleNumberInput}>9</div>
          <div className="control">&times;</div>
        </div>
        <div className="row">
          <div className="control" onClick={handleNumberInput}>4</div>
          <div className="control" onClick={handleNumberInput}>5</div>
          <div className="control" onClick={handleNumberInput}>6</div>
          <div className="control">&minus;</div>
        </div>
        <div className="row">
          <div className="control" onClick={handleNumberInput}>1</div>
          <div className="control" onClick={handleNumberInput}>2</div>
          <div className="control" onClick={handleNumberInput}>3</div>
          <div className="control">+</div>
        </div>
        <div className="row">
          <div className="control zero" onClick={handleNumberInput}>0</div>
          <div className="control" onClick={handleNumberInput}>.</div>
          <div className="control equals">=</div>
        </div>
      </div>
    </div>
  );
}
