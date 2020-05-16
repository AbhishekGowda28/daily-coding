import React, { useState } from 'react';
import { getNewStorieIds } from "../services/api";
import { Story } from './Story';
import { Loader } from './Loader';
import { infiniteScroll } from '../hooks/infinateScroll';

function NewStoryIds() {

    const [newStoryIds, setNewStoryIds] = useState([]);
    const counts = infiniteScroll();

    React.useEffect(() => {
        getNewStorieIds().then((newStoreiesIds) => {
            setNewStoryIds(newStoreiesIds);
        });
    }, []);

    return (
        <div className="stories" data-testid="stories">
            {newStoryIds.length > 0 ?
                newStoryIds.slice(0, counts).map((storyId) => {
                    return (<Story key={storyId} storyId={storyId} />)
                }) :
                <Loader />
            }
        </div>
    );
}

export { NewStoryIds };
