import React from 'react';
import '../styles/App.css';
import getRandomColor from '../utils';
import generateRandomNumbers from '../utils/generateRandomNumbers';
import { yieldInsertionSort } from '../utils/insertionSort';

function App() {
  const [data, setData] = React.useState([]);
  const [sortedData, setSortedData] = React.useState({});
  const [timeTaken, setTimeTaken] = React.useState(0);
  const [disableController, setDisableController] = React.useState(false);
  const [isSorted, setIsSorted] = React.useState(false);
  React.useEffect(() => {
    randomizeNumber();
  }, []);
  const randomizeNumber = () => {
    setTimeTaken(0);
    const randomData = generateRandomNumbers()
    setData(randomData);
    const value = yieldInsertionSort(randomData);
    setSortedData(value);
    setIsSorted(false);
  }
  return (
    <div className="App">
      <h1>Sorting APP</h1>
      <h1>Time Taken {timeTaken} Seconds</h1>
      <div>
        <button disabled={disableController} onClick={() => { randomizeNumber(); }}>Randomize</button>
      </div>
      <div>
        <button
          disabled={disableController || isSorted}
          onClick={() => {
            setDisableController(true);
            const startTime = (new Date()).getTime();
            const interval = setInterval(() => {
              let other = sortedData.next();
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
            }, 5);
          }}>Click Me to Sort</button>
      </div>

      {data.map((value, index) => {
        return (<div key={index} className="value-block" style={{ backgroundColor: getRandomColor(value) }}>{value}</div>)
      })}
    </div>
  );
}

export default App;
