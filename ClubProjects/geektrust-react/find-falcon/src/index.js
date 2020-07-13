import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Main from './Components/Main';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            vehicals : {},
            planets : {}
        }
    }

    render(){
        return (
            <div>
                <Header />
                <Navigation />
                <Main/>
                <Footer />
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

