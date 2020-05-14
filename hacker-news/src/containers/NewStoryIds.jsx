import React, { useState } from 'react';
import { getNewStorieIds } from "../services/api";
import { Story } from '../components/Story';
import { AppTitle } from '../styles/TitleStyle';

function NewStoryIds() {

    const [newStoryIds, setNewStoryIds] = useState([]);

    React.useEffect(() => {
        getNewStorieIds().then((newStoreiesIds) => {
            setNewStoryIds(newStoreiesIds);
        });
    }, []);

    return (
        <div>
            <AppTitle>Hacker News Stories</AppTitle>
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
