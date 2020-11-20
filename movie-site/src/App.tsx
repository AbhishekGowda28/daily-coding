import React from 'react';
import './App.css';
import { LastestMovie } from './components/LastestMovie';
import { LatestTVShows } from './components/LatestTVShows';
import { Switch } from './components/Switch';
import { apiConfiguration } from './service/configuration';
import { Movie } from './components/Genre';

function App() {
  const [loadMovies, setLoadMovies] = React.useState(false);
  React.useEffect(() => {
    apiConfiguration().then(() => {
      setLoadMovies(true);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="controlleres">
          {/* <button onClick={() => setLoadMovies(true)}>Show Movies</button>
          <button onClick={() => setLoadMovies(false)}>Show TV Shows</button> */}
          <Switch checked={loadMovies} option_2="Shows" option_1="Movies" selectedOption={(optionSelected: string) => {
            if (optionSelected) {
              setLoadMovies(true);
            } else {
              setLoadMovies(false);
            }
          }} />
        </div>
        {loadMovies ? <LastestMovie /> : <LatestTVShows />}
      </header>
    </div>
  );
}

export default App;
