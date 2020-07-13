import React from 'react';


import NewsListItem from './news_list_item';

const NewsList = (props) => {
        const newsItem = props.news.map((item)=>{
            return(<NewsListItem key={item.id} item={item}/>);
        });

        return (<div>{newsItem}</div>);
        };

export default NewsList;