import React from 'react';
import { getNewStorieIds } from "../services/api";
import { Story } from './Story';
import { Loader } from './Loader';
import { STORY_INCREMENT, MAX_STORIES } from "../constants/constants";


class StoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newStoryIds: [],
            counts: STORY_INCREMENT
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        getNewStorieIds().then((newStoreiesIds) => {
            if (newStoreiesIds !== undefined && newStoreiesIds !== null) {
                this.setState({ newStoryIds: newStoreiesIds });
            }
        });
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }


    handleScroll() {
        const innerHeight = window.innerHeight;
        const scrollPosition = window.document.documentElement.scrollTop;
        const offSetHeight = window.document.documentElement.offsetHeight;

        const totalScroll = innerHeight + scrollPosition;
        if ((totalScroll > offSetHeight || totalScroll === offSetHeight)) {
            if (this.state.counts + STORY_INCREMENT >= MAX_STORIES) {
                this.setState({ counts: MAX_STORIES });
            } else {
                this.setState({ counts: this.state.counts + STORY_INCREMENT });
            }
        }
    }

    render() {
        return (
            <div className="stories" data-testid="stories">
                {this.state.newStoryIds.length > 0 ?
                    this.state.newStoryIds.slice(0, this.state.counts).map((storyId, index) => {
                        return (<Story key={index} storyId={storyId} />)
                    })
                    :
                    <Loader />
                }
            </div>
        );
    }
}

export { StoriesContainer };