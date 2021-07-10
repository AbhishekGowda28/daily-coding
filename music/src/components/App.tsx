import { Fragment, useState } from "react";
import youTube from "../components/youTube";
import { SearchItem } from "../interface/youTube/search";
import '../styles/App.css';
import Button from "./common/Button";
import Input from "./common/Input";

function App() {
  const [items, setItems] = useState<SearchItem[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [nextToken, setNextToken] = useState("");

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
                queryString: searchString,
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
          {items.map(item => <DisplayItem item={item} key={item.id.channelId} />)}
        </div>
        {nextToken.length > 0 ?
          <Button
            text="NEXT"
            onClick={() => {
              youTube.getSearchResult({ queryString: searchString, nextPageToken: nextToken }).then(result => {
                setItems([...items, ...result.items]);
                setNextToken(result.nextPageToken);
              });
            }}
          />
          : <Fragment />}
      </section>
    </div>
  );
}

function DisplayItem(props: { item: SearchItem }) {
  console.log("Items", props.item);
  const tagKind = props.item.id.kind.split("#")[1];
  const thumbnailsType = tagKind === "channel" ? "high" : "medium";
  return (
    <div className="item">
      <img src={props.item.snippet.thumbnails[thumbnailsType].url} width={"320px"} height={"180px"} alt={props.item.snippet.title} />
      <span className={`tag ${tagKind}`}>{tagKind}</span>
      <span dangerouslySetInnerHTML={{ __html: props.item.snippet.title }} />
    </div>
  );
}

export default App;
