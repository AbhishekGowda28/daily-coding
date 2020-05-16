import React, { useState } from 'react';
import { getNewStorieIds } from "../services/api";
import { Story } from './Story';

function NewStoryIds() {

    const [newStoryIds, setNewStoryIds] = useState([]);

    React.useEffect(() => {
        getNewStorieIds().then((newStoreiesIds) => {
            setNewStoryIds(newStoreiesIds);
        });
    }, []);

    return (
        <div className="stories" data-testId="stories">
            {
                newStoryIds.map((storyId) => {
                    return (<Story key={storyId} storyId={storyId} />)
                })
            }
        </div>
    );
}

export { NewStoryIds };
