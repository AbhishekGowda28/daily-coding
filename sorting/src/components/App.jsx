/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../styles/App.css';
import generateRandomNumbers from '../utils/generateRandomNumbers';
import Button from './Common/Button';
import CheckBox from './Common/Checkbox';
import DataBlock from './DataBlock';
import SortinTypes from './SortingTypes';

function App() {
  const [data, setData] = React.useState([]);
  const [timeTaken, setTimeTaken] = React.useState(0);
  const [disableController, setDisableController] = React.useState(false);
  const [isSorted, setIsSorted] = React.useState(false);
  const [allowDuplicate, setAllowDuplicate] = React.useState(false);
  const ARRAY_SIZE = 100;
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
          onChange={() => { setAllowDuplicate(!allowDuplicate); }}
        />
      </div>
      <SortinTypes
        data={data}
        disabled={isSorted || disableController}
        sortData={(sortMethod) => { sortData(sortMethod) }}
      />
      <DataBlock data={data} />
    </div>
  );
}

export default App;
