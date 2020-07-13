import React from 'react';


const PageNotFound = (props) => {
    return (
        <h1 className="pageNotFound">PAGE <code>{props.location.pathname}</code> NOT FOUND</h1>
    );
}

export default PageNotFound;