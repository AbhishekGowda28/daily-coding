import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,  Switch} from 'react-router-dom';

import Profile from './Components/profile';
import Post from './Components/post';
import PostItem from './Components/postItem';
import PageNotFound from './Components/pageNotFound'
import Navigation from './Components/Navigation';
import Lifecycle from './Components/lifecycle';

const App = () => {
    return (<div>
        <h1>Home</h1>
    </div>);
};


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navigation />
            <hr/>
           <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/post' component={Post}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/post/:id' component={PostItem}></Route>
                <Route path='/lifecycle' component={Lifecycle}></Route>
                <Route path='/*' component={PageNotFound}></Route>
           </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
