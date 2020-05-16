import React from "react";
import { getItem } from "../services/api";
import { mapTime } from "../helper/mapTime";

function Story({ storyId }) {

    const [story, setStory] = React.useState({});

    React.useEffect(() => {
        getItem(storyId).then((result) => {
            setStory(result);
        })
    }, [storyId]);

    return (
        story.url ?
            <div className="story" data-testId="story">
                <div className="storyTitle" data-testId="story-title">
                    <a href={story.url} target="__blank">{story.title}</a>
                </div>
                <div className="storyMeta">
                    <div className="storyMetaElement story__author" data-testId="story-author">
                        <span>Author: </span>
                        {story.author}
                    </div>
                    <div className="storyMetaElement story__time" data-testId="story-time">
                        <span>Posted : </span>
                        {mapTime(story.updateTime * 1000)}
                    </div>
                </div>
            </div>
            : null

    );
}

export { Story }
