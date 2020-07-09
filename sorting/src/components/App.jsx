import React from 'react';
import '../styles/App.css';
import getRandomColor from '../utils';
import generateRandomNumbers from '../utils/generateRandomNumbers';
import { yieldInsertionSort } from '../utils/insertionSort';
import { yeildSelectionSort } from "../utils/selectionSort";

function App() {
  const [data, setData] = React.useState([]);
  const [timeTaken, setTimeTaken] = React.useState(0);
  const [disableController, setDisableController] = React.useState(false);
  const [isSorted, setIsSorted] = React.useState(false);
  const ARRAY_SIZE = 150;
  const CONTROL_RATE = 15;

  const randomizeNumber = () => {
    setTimeTaken(0);
    const randomData = generateRandomNumbers(ARRAY_SIZE);
    setData(randomData);
    setIsSorted(false);
  }

  /**
   * 
   * @param {Generator<any, any, unknown>} sortMethod 
   */
  const sortData = (sortMethod) => {
    setDisableController(true);
    const startTime = (new Date()).getTime();
    const interval = setInterval(() => {
      let other = sortMethod.next();
      if (other.value !== undefined) {
        setData([...other.value]);
        setTimeTaken("--");
      } else {
        clearInterval(interval);
        const endTime = (new Date()).getTime();
        setTimeTaken((endTime - startTime) / 1000);
        setDisableController(false);
        setIsSorted(true);
      }
    }, CONTROL_RATE);
  }

  React.useEffect(() => {
    randomizeNumber();
  }, []);

  return (
    <div className="App">
      <h1>Sorting APP</h1>
      <h1>Time Taken {timeTaken} Seconds</h1>
      <div>
        <button disabled={disableController} onClick={randomizeNumber}>Randomize</button>
      </div>
      <div className="Sorting-Types">
        <button
          disabled={disableController || isSorted}
          onClick={() => { sortData(yieldInsertionSort(data)) }}>Insertion Sort</button>
        <button
          disabled={disableController || isSorted}
          onClick={() => { sortData(yeildSelectionSort(data)) }}>Selection Sort</button>
      </div>
      <div className="data-block">
        {data.map((value, index) => {
          return (<div key={index} className="value-block" style={{ backgroundColor: getRandomColor(value) }}>{value}</div>)
        })}
      </div>
    </div>
  );
}

export default App;
