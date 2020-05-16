import React, { useState } from 'react';
import { getNewStorieIds } from "../services/api";
import { Story } from './Story';
import { Loader } from './Loader';

function NewStoryIds() {

    const [newStoryIds, setNewStoryIds] = useState([]);

    React.useEffect(() => {
        getNewStorieIds().then((newStoreiesIds) => {
            setNewStoryIds(newStoreiesIds);
        });
    }, []);

    return (
        <div className="stories" data-testId="stories">
            {newStoryIds.length > 0 ?
                newStoryIds.map((storyId) => {
                    return (<Story key={storyId} storyId={storyId} />)
                }) :
                <Loader />
            }
        </div>
    );
}

export { NewStoryIds };
