import React from 'react';


const NewsItem = (props) =>{
    return (<div className="newsListItem">
        <h2>{props.item.title}</h2>
        <div>{props.item.feed}</div>
    </div>);
}


export default NewsItem;