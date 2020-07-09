/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../styles/App.css';
import generateRandomNumbers from '../utils/generateRandomNumbers';
import { yieldInsertionSort } from '../utils/insertionSort';
import { yeildSelectionSort } from "../utils/selectionSort";
import DataBlock from './DataBlock';
import CheckBox from './Common/Checkbox';
import Button from './Common/Button';

function App() {
  const [data, setData] = React.useState([]);
  const [timeTaken, setTimeTaken] = React.useState(0);
  const [disableController, setDisableController] = React.useState(false);
  const [isSorted, setIsSorted] = React.useState(false);
  const [allowDuplicate, setAllowDuplicate] = React.useState(false);
  const ARRAY_SIZE = 150;
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
        <Button
          disabled={disableController}
          onClick={randomizeNumber}
          label="Randomize"
        />
        <CheckBox
          checked={allowDuplicate}
          label="Allow Duplicates"
          disabled={disableController}
          onChange={() => { setAllowDuplicate(!allowDuplicate); randomizeNumber() }}
        />
      </div>
      <div className="Sorting-Types">
        <Button
          disabled={disableController || isSorted}
          onClick={() => { sortData(yieldInsertionSort(data)) }}
          label="Insertion Sort"
        />
        <Button
          disabled={disableController || isSorted}
          onClick={() => { sortData(yeildSelectionSort(data)) }}
          label="Selection Sort"
        />
      </div>
      <DataBlock data={data} />
    </div>
  );
}

export default App;
