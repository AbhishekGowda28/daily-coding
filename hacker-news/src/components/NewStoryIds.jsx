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
        <div className="stories">
            {newStoryIds.map((storyId) => {
                return (
                    <Story storyId={storyId} key={storyId} />
                )
            })}
        </div>
    );
}

export { NewStoryIds };
