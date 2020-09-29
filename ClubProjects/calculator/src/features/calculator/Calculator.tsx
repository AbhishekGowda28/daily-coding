import React, { useState } from 'react';

export function Calculator() {

  const [previousState, setPreviousState] = useState("");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  return (
    <div>
      <div className="calculator">
        <div className="previous-state">
          {previousState}
        </div>
        <div className="result">
          {result}
        </div>
        <div>
          <button onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>1</button>
          <button onClick={(value) => {
            const prev = String(result) + "+";
            setPreviousState(prev);
            setResult(0);
            setOperator("+")
          }}>+</button>
          <button onClick={(value) => {
            const lhs = previousState.split(operator)[0];
            const rhs = result;
            const final = (Number(lhs) + Number(rhs));
            setResult(final);
            setPreviousState(lhs + "+" + rhs);
          }}>=</button>
        </div>
        <div>
          <button onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>1</button>
          <button onClick={(value) => {
            const prev = String(result) + "+";
            setPreviousState(prev);
            setResult(0);
            setOperator("+")
          }}>+</button>
          <button onClick={(value) => {
            const lhs = previousState.split(operator)[0];
            const rhs = result;
            const final = (Number(lhs) + Number(rhs));
            setResult(final);
            setPreviousState(lhs + "+" + rhs);
          }}>=</button>
        </div>
        <div>
          <button onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>1</button>
          <button onClick={(value) => {
            const prev = String(result) + "+";
            setPreviousState(prev);
            setResult(0);
            setOperator("+")
          }}>+</button>
          <button onClick={(value) => {
            const lhs = previousState.split(operator)[0];
            const rhs = result;
            const final = (Number(lhs) + Number(rhs));
            setResult(final);
            setPreviousState(lhs + "+" + rhs);
          }}>=</button>
        </div>
      </div>
    </div>
  );
}
