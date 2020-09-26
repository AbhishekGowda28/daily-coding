import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './calculatorSlice';
import styles from './Calculator.module.css';

export function Calculator() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className="calculator">
        <div className="previous-actions">
          ABCD
        </div>
        <div className="current-value">
          EFG
        </div>
        <div>
          <span>MC</span>
          <span>M+</span>
          <span>M-</span>
          <span>MR</span>
        </div>
        <div>
          <span>C</span>
          <span>+/-</span>
          <span>/-</span>
          <span>X</span>
        </div>
        <div>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>-</span>
        </div>
        <div>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>+</span>
        </div>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>=</span>
        </div>
        <div>
          <span>x</span>
          <span>0</span>
          <span>.</span>
        </div>
        <div>
        </div>
      </div>




      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
