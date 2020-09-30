import React, { useState } from 'react';
import "./Calculator.css";

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
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>7</button>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>8</button>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>9</button>
        </div>
        <div>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>4</button>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>5</button>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>6</button>
        </div>
        <div>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>1</button>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>2</button>
          <button className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>3</button>
        </div>
        <div>
          <button  className="button" onClick={(value) => {
            setResult(Number(result + value.currentTarget.innerText));
          }}>0</button>
          <button  className="button" onClick={(value) => {
            const prev = String(result) + "+";
            setPreviousState(prev);
            setResult(0);
            setOperator("+")
          }}>+</button>
          <button className="button" onClick={(value) => {
            const lhs = previousState.split(operator)[0];
            const rhs = result;
            const final = (Number(lhs) + Number(rhs));
            setResult(final);
            setPreviousState(lhs + "+" + rhs);
          }}>=</button>
        </div>
        <button className="button" onClick={(value) => {
            setResult(0);
            setPreviousState("");
          }}>C</button>
      </div>
    </div>
  );
}
