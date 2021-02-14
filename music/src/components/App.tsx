import React from "react";
import { YouTubeClass } from "../components/youTube";
import '../styles/App.css';

function App() {
  const [items, setItems] = React.useState<any[]>([]);
  React.useEffect(() => {
    new YouTubeClass().getSearchResult({ maxResults: 25, part: "snippet", queryString: "NCS" }).then(searchItems => {
      console.log(searchItems);
      setItems(searchItems)
    });
  }, []);
  return (
    <div className="App">
      <section id="video">
        {items.map(item => JSON.stringify(item))}
      </section>
    </div>
  );
}

export default App;
