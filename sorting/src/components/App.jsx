import React from 'react';
import '../styles/App.css';
import getRandomColor from '../utils';
import generateRandomNumbers from '../utils/generateRandomNumbers';
import { GenerateSelectionSort } from '../utils/selectionSort';

function App() {
  const [data, setData] = React.useState([]);
  const [sortedData, setSortedData] = React.useState({});
  const [timeTaken, setTimeTaken] = React.useState("");
  React.useEffect(() => {
    setTimeTaken(0);
    const randomData = generateRandomNumbers()
    setData(randomData);
    const value = GenerateSelectionSort(randomData);
    setSortedData(value);
  }, []);
  return (
    <div className="App">
      <h1>Sorting APP</h1>
      <h1>Time Taken {timeTaken / 1000} Seconds</h1>
      <div>
        <button onClick={() => {
          const startTime = (new Date()).getTime();
          const interval = setInterval(() => {
            let other = sortedData.next();
            if (other.value !== undefined) {
              setData([...other.value]);
              other = sortedData.next();
            } else {
              clearInterval(interval);
              const endTime = (new Date()).getTime();
              setTimeTaken(endTime - startTime);
            }
          }, 1);
        }}>Click Me to Sort</button>
      </div>
      {data.map((value, index) => {
        return (<div key={index} style={{ margin: "auto", width: "50px", height: "50px", float: "left", backgroundColor: getRandomColor(value) }}>{value}</div>)
      })}
    </div>
  );
}

export default App;
