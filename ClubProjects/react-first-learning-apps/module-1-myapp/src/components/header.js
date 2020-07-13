import React, { Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        };
    }
    
    render(){
        return(
            <header>
                <h1 className="h1 text-center">Todays NEWS</h1><br/>
                <input className="form-control" placeholder="Search" onChange={this.clicked.bind(this)} />
            </header>
        );
    }

    // Method defined inside Header Component, we access the method using 'this' Keyword
    clicked(e){
        this.setState({keyword:e.target.value});
        this.props.newsSearch(e.target.value);
    }
}




export default Header;