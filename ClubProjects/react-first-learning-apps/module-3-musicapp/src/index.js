import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import PageNotFound from './components/pageNotFound';


const App = ()=>{
    return(<BrowserRouter>
        <div>
            <Switch>
                <Route path="/artist/:artistId" component={Artist} />
                <Route exact path="/" component={Home} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>);
}



ReactDOM.render(<App />, document.getElementById('root'));
