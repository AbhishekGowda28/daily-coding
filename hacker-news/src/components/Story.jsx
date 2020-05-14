import React from "react";
import { getItem } from "../services/api";

function Story({ storyId }) {

    const [story, setStory] = React.useState({});

    React.useEffect(() => {
        getItem(storyId).then((result) => {
            setStory(result);
        })
    }, [storyId]);

    return (
        <div >
            {story.url ?
                <div className="story">
                    <p>
                        <a href={story.url} target="__blank">{story.title}</a>
                    </p>
                    <div>Author: {story.author} </div>
                    <div>Last Updated: {new Date(story.updateTime).toLocaleDateString()} </div>
                </div>
                : null}
        </div>
    );
}

export { Story }
