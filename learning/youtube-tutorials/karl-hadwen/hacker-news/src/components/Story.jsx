import React from "react";
import { getItem } from "../services/api";
import { mapTime } from "../helper/mapTime";

const Story = React.memo(

    function Story({ storyId }) {

        const [story, setStory] = React.useState({});

        React.useEffect(() => {
            getItem(storyId).then((result) => {
                setStory(result);
            })
        }, [storyId]);

        return (
            story?.url ?
                <div className="story" data-testid="story">
                    <div className="storyTitle" data-testid="story-title">
                        <a href={story.url} target="__blank">{story.title}</a>
                    </div>
                    <div className="storyMeta">
                        <div className="storyMetaElement story__author" data-testid="story-author">
                            <span>Author: </span>
                            {story.by}
                        </div>
                        <div className="storyMetaElement story__time" data-testid="story-time">
                            <span>Posted : </span>
                            {mapTime(story.time * 1000)}
                        </div>
                    </div>
                </div>
                : null

        );
    }
)

export { Story }
