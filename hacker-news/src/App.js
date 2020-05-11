import React, { useState } from 'react';
import { getNewStorieIds, getItem } from "./services/api";


function App() {

  const [item, setItem] = useState({});
  const [newStoryIds, setNewStoryIds] = useState([]);

  React.useEffect(() => {
    getNewStorieIds().then((newStoreiesIds) => {
      setNewStoryIds(newStoreiesIds);
    });
  }, []);

  React.useEffect(() => {
    debugger;
    getItem(newStoryIds[0]).then((randomItem) => {
      setItem(randomItem);
    });
  }, [newStoryIds]);

  return (
    <div className="App">
      Hacker NEWS
      {JSON.stringify(item)}
    </div>
  );
}

export { App };
