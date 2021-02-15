import React from "react";
import { YouTubeClass } from "../components/youTube";
import { SearchItem } from "../interface/youTube/search";
import '../styles/App.css';

function App() {
  const [items, setItems] = React.useState<SearchItem[]>([]);
  const [searchString, setSearchString] = React.useState<string>("");
  return (
    <div className="App">
      <section id="video">
        <div>
          <input
            onChange={(event) => {
              setSearchString(event.target.value);
            }}
          />
          <button onClick={() => {
            new YouTubeClass().getSearchResult({
              maxResults: 25, part: "snippet", queryString: searchString
            }).then(searchItems => {
              console.log(searchItems);
              searchItems === undefined ? setItems([]) : setItems(searchItems.items);
            });
          }}>Search</button>
        </div>
        <div className="items">
          {items.map(item => {
            const tagKind = item.id.kind.split("#")[1];
            const thumbnailsType = tagKind === "channel" ? "high" : "medium";
            return (
              <div className="item">
                <img src={item.snippet.thumbnails[thumbnailsType].url} width={"320px"} height={"180px"} />
                <span className={`tag ${tagKind}`}>{tagKind}</span>
                <span>{item.snippet.title}</span>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
