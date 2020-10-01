import React, { useState } from 'react';
import "./Calculator.css";

export function Calculator() {

  const [previousState, setPreviousState] = useState("");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  return (
    <div className="calculator">
      <div className="calculation">2 X 10 X 5 + 700</div>
      <div className="result">1.700</div>
      <div className="controls">
        <div className="row-1">
          <div>C</div>
          <div>+/-</div>
          <div>%</div>
          <div>&#247;</div>
        </div>
        <div className="row-2">
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>&times;</div>
        </div>
        <div className="row-3">
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>-</div>
        </div>
        <div className="row-4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>+</div>
        </div>
        <div className="row-4">
          <div className="span-2-column">0</div>
          <div>,</div>
          <div className="equals">=</div>
        </div>
      </div>
    </div>
  );
}
