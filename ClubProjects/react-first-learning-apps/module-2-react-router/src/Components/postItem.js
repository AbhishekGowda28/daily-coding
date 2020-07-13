import React from 'react';


const PostItem = (props) => {
        return (
            <h1>PostItem {props.match.params.id}</h1>
        );
}

export default PostItem;