import React from "react";
import { YouTubeClass } from "../components/youTube";
import { SearchItem } from "../interface/youTube/search";
import '../styles/App.css';
import Button from "./common/Button";
import Input from "./common/Input";

function App() {
  const [items, setItems] = React.useState<SearchItem[]>([]);
  const [searchString, setSearchString] = React.useState<string>("");
  const [nextToken, setNextToken] = React.useState("");
  const youTube = new YouTubeClass();

  return (
    <div className="App">
      <section id="video">
        <div>
          <Input
            value={searchString}
            onChange={(value) => {
              setSearchString(value);
              setNextToken("");
            }}
          />
          <Button
            text="Search"
            onClick={() => {
              youTube.getSearchResult({
                part: "snippet", queryString: searchString,
                nextPageToken: nextToken
              }).then(searchItems => {
                if (searchItems.nextPageToken !== undefined) {
                  setNextToken(searchItems.nextPageToken);
                } else {
                  setNextToken("");
                }
                searchItems === undefined ? setItems([]) : setItems(searchItems.items);
              });
            }}
          />
        </div>
        <div className="items">
          {items.map(item => {
            const tagKind = item.id.kind.split("#")[1];
            const thumbnailsType = tagKind === "channel" ? "high" : "medium";
            return (
              <div className="item">
                <img src={item.snippet.thumbnails[thumbnailsType].url} width={"320px"} height={"180px"} alt={item.snippet.title} />
                <span className={`tag ${tagKind}`}>{tagKind}</span>
                <span dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
              </div>
            )
          })}
        </div>
        {nextToken.length > 0 ?
          <Button
            text="NEXT"
            onClick={() => {
              youTube.getSearchResult({ part: "snippet", queryString: searchString, nextPageToken: nextToken }).then(result => {
                setItems([...items, ...result.items]);
                setNextToken(result.nextPageToken);
              });
            }}
          />
          : <React.Fragment />}
      </section>
    </div>
  );
}

export default App;
