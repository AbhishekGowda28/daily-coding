import React, { useState } from 'react';
import { getNewStorieIds, getItem } from "./services/api";


function StoryItems(item) {
  console.log(item);
  return (
    <div>{item.title}</div>
  );
}


function App() {

  const [item, setItem] = useState({});
  const [newStoryIds, setNewStoryIds] = useState([]);

  React.useEffect(() => {
    getNewStorieIds().then((newStoreiesIds) => {
      setNewStoryIds(newStoreiesIds);
    });
  }, []);

  React.useEffect(() => {
    getItem(newStoryIds[0]).then((randomItem) => {
      setItem(randomItem);
    });
  }, [newStoryIds]);

  return (
    <div className="App">
      Hacker NEWS
      <StoryItems item={item} />
    </div>
  );
}

export { App };
