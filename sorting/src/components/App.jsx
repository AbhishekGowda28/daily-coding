/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../styles/App.css';
import generateRandomNumbers from '../utils/generateRandomNumbers';
import { yieldInsertionSort } from '../utils/insertionSort';
import { yeildSelectionSort } from "../utils/selectionSort";
import DataBlock from './DataBlock';
import CheckBox from './Common/Checkbox';
// import Controllers from './Controllers';

function App() {
  const [data, setData] = React.useState([]);
  const [timeTaken, setTimeTaken] = React.useState(0);
  const [disableController, setDisableController] = React.useState(false);
  const [isSorted, setIsSorted] = React.useState(false);
  const [allowDuplicate, setAllowDuplicate] = React.useState(false);
  const ARRAY_SIZE = 50;
  const CONTROL_RATE = 0;

  const randomizeNumber = () => {
    setTimeTaken(0);
    setData(generateRandomNumbers(ARRAY_SIZE, allowDuplicate));
    setIsSorted(false);
  }

  /**
   * 
   * @param {Generator<number, number[], number[]>} sortMethod 
   */
  const sortData = (sortMethod) => {
    setDisableController(true);
    const startTime = (new Date()).getTime();
    setTimeTaken("--");
    const interval = setInterval(() => {
      let other = sortMethod.next();
      if (other.value !== undefined) {
        setData([...other.value]);
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
        <CheckBox
          checked={allowDuplicate}
          label="Allow Duplicates"
          disabled={disableController}
          onChange={() => { setAllowDuplicate(!allowDuplicate); randomizeNumber() }}
        />
      </div>
      <div className="Sorting-Types">
        <button
          disabled={disableController || isSorted}
          onClick={() => { sortData(yieldInsertionSort(data)) }}>Insertion Sort</button>
        <button
          disabled={disableController || isSorted}
          onClick={() => { sortData(yeildSelectionSort(data)) }}>Selection Sort</button>
      </div>
      {/* <Controllers
        data={data}
        updateTime={(time) => setTimeTaken(time)}
        updateData={(data) => { setData(data) }}
      /> */}
      <DataBlock data={data} />
    </div>
  );
}

export default App;
