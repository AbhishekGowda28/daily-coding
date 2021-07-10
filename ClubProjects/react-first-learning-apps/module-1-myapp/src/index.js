// global and 3rd party lib
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// local modules
import Header from './components/header';
import NewsList from './components/news_list';

// import database
import DB from './db'

class App extends Component{

    constructor(props){
        super(props);
        // initilizing state of the component
        this.state = {
            news : DB,
            filtered : DB
        }
    }

    filterNews(keywords){

        let filtered = this.state.news.filter((item)=>{
            return item.title.toUpperCase().indexOf(keywords.toUpperCase()) > -1;
        });
        this.setState({filtered});
    }

   render(){
       return (
           <div>
               <Header newsSearch={keywords => this.filterNews(keywords)}/>
               <NewsList news={this.state.filtered}/>
           </div>
       );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
