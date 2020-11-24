import React from 'react';
import './App.css';
import { LastestMovie } from './components/LastestMovie';
import { LatestTVShows } from './components/LatestTVShows';
import { Switch } from './components/Switch';
import { apiConfiguration } from './service/configuration';

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
