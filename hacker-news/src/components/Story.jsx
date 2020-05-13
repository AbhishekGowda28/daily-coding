import React from "react";
import { getItem } from "../services/api";

function Story({ storyId }) {

    const [storyTitle, setStoryTitle] = React.useState("");
    const [storyLink, setStoryLink] = React.useState("");

    React.useEffect(() => {
        getItem(storyId).then((result) => {
            setStoryTitle(result.title);
            setStoryLink(result.url);
        })
    }, []);

    return (
        <div className="story">
            <div>
                <a href={storyLink}>{storyTitle}</a>
            </div>
        </div>
    );
}

export { Story }
