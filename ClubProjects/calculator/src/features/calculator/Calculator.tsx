import React, { useState } from 'react';
import "./calculator.css"
export function Calculator() {

  const [previousResult, setPreviousResult] = useState("");
  const [result, setResult] = useState("0");
  const [operator, setOperator] = useState("");
  const [sign, setSign] = useState("");

  const handleNumberInput = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const input = result.toString() + event.currentTarget.innerText;
    setResult(input);
  };

  const clearInput = () => {
    setPreviousResult("");
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

  const assignResultToPreviousResult = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPreviousResult(result);
    setResult("");
    setOperator(event.currentTarget.innerText);
  }

  const evaluate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    debugger;
    if (operator !== "") {
      const prev = Number(previousResult);
      const curr = Number(result);
      switch (operator) {
        case "+": {
          setResult((prev + curr).toString());
          setPreviousResult("");
          setOperator("");
          break;
        }
        case "-": {
          setResult((prev - curr).toString());
          setPreviousResult("");
          setOperator("");
          break;
        }
        case "x": {
          setResult((prev * curr).toString());
          setPreviousResult("");
          setOperator("");
          break;
        }
        case "/": {
          setResult((prev / curr).toString());
          setPreviousResult("");
          setOperator("");
          break;
        }
        default: break;
      }

    }
  }


  return (
    <div className="calculator">
      <div className="calculation">{previousResult}</div>
      <div className="result">
        <span>{sign}</span>
        <span>{result}</span>
      </div>
      <div className="controls">
        <div className="row">
          <div className="control" onClick={clearInput}>C</div>
          <div className="control" onClick={toggleSign}>+/-</div>
          <div className="control">%</div>
          {/* <div className="control" onClick={assignResultToPreviousResult}>&divide;</div> */}
          <div className="control" onClick={assignResultToPreviousResult}>/</div>
        </div>
        <div className="row">
          <div className="control" onClick={handleNumberInput}>7</div>
          <div className="control" onClick={handleNumberInput}>8</div>
          <div className="control" onClick={handleNumberInput}>9</div>
          {/* <div className="control" onClick={assignResultToPreviousResult}>&times;</div> */}
          <div className="control" onClick={assignResultToPreviousResult}>x</div>
        </div>
        <div className="row">
          <div className="control" onClick={handleNumberInput}>4</div>
          <div className="control" onClick={handleNumberInput}>5</div>
          <div className="control" onClick={handleNumberInput}>6</div>
          {/* <div className="control" onClick={assignResultToPreviousResult}>&minus;</div> */}
          <div className="control" onClick={assignResultToPreviousResult}>-</div>
        </div>
        <div className="row">
          <div className="control" onClick={handleNumberInput}>1</div>
          <div className="control" onClick={handleNumberInput}>2</div>
          <div className="control" onClick={handleNumberInput}>3</div>
          <div className="control" onClick={assignResultToPreviousResult}>+</div>
        </div>
        <div className="row">
          <div className="control zero" onClick={handleNumberInput}>0</div>
          <div className="control" onClick={handleNumberInput}>.</div>
          <div className="control equals" onClick={evaluate}>=</div>
        </div>
      </div>
    </div>
  );
}