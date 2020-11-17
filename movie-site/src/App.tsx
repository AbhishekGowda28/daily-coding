import React from 'react';
import './App.css';
import { Discover } from './components/Discover';
import { apiConfiguration } from './service/configuration';
// import { Movie } from './components/movie';

function App() {
  const [loadApp, setLoadApp] = React.useState(false);
  React.useEffect(() => {
    apiConfiguration().then(() => {
      setLoadApp(true)
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Movie /> */}
        {loadApp ? <Discover /> : <React.Fragment />}
      </header>
    </div>
  );
}

export default App;
