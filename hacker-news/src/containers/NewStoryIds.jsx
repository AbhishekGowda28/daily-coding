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
        <div className="App">
            {newStoryIds.map((storyId, index) => {
                return (
                    <Story storyId={storyId} key={index} />
                )
            })}
        </div>
    );
}

export { NewStoryIds };
