import React, { useState } from 'react';
import { getNewStorieIds } from "../services/api";
import { Story } from '../components/Story';

function NewStoryIds() {

    const [newStoryIds, setNewStoryIds] = useState([]);

    React.useEffect(() => {
        getNewStorieIds().then((newStoreiesIds) => {
            setNewStoryIds(newStoreiesIds);
        });
    }, []);

    return (
        <div>
            <h1 className="AppTitle">Hacker News Stories</h1>
            <div className="stories">
                {newStoryIds.map((storyId) => {
                    return (
                        <Story storyId={storyId} key={storyId} />
                    )
                })}
            </div>
        </div>
    );
}

export { NewStoryIds };
