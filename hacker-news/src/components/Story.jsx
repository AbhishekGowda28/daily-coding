import React from "react";
import { getItem } from "../services/api";
import { StoryStyles } from "../styles/StoryStyle";

function Story({ storyId }) {

    const [story, setStory] = React.useState({});

    React.useEffect(() => {
        getItem(storyId).then((result) => {
            setStory(result);
        })
    }, []);

    return (
        <div className="story">
            {story.url ?
                <StoryStyles >
                    <p>
                        <a href={story.url} target="__blank">{story.title}</a>
                    </p>
                    <div>Author: {story.author} </div>
                    <div>Last Updated: {new Date(story.updateTime).toLocaleDateString()} </div>
                </StoryStyles>
                : null}
        </div>
    );
}

export { Story }
