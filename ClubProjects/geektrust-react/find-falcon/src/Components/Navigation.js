import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

// import App from '../index'
// import PageNotFound from './pageNotFound'
import Main from './Main'

const Navigation = () =>{
    return (<BrowserRouter>
    <nav>
        <ul>
            <li><Link to="https://geektrust.in/" target="_blank" >GeekTrust Home</Link></li>
            <li><Link to="/"  onClick={()=>{window.location.reload();}}>Reset</Link></li>
        </ul>
    </nav>
    </BrowserRouter>);
}

export default Navigation;



