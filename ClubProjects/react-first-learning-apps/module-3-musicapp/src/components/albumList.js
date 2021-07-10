import React from 'react';


const AlbumList = (props)=>{

    function showList({albumList}){
        if (albumList){
            return albumList.map(function(item, index){
                return (<img key={index} src={`/images/albums/${item.cover}.jpg`} alt={item.cover}/>);
            });
        }
    }

    return(<div className="albums_list">
        {showList(props)}
    </div>);
}


export default AlbumList;