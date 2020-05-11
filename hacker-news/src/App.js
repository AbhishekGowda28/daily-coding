import React from 'react';
import { getNewStorieIds, getItem } from "./services/api";


function App() {
  const newStoreiesIds = getNewStorieIds();

  const randomItem = getItem(newStoreiesIds[0]);

  console.log(randomItem);

  return (
    <div className="App">
      Hacker NEWS
    </div>
  );
}

export { App };
