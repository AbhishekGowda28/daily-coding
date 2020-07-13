import React from 'react';


import Featured from './featured';
import Subscriptions from './subscriptions';
import Blocks from './blocks';

const HOME_URL = "http://localhost:3001/home";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            home : ''
        }
    }

    componentDidMount(){
        fetch(HOME_URL,{
            method:"GET"
        }).then((response, reject)=>{
            if(response.ok)
                return response.json();
        }).then((data)=>{
            this.setState({
                home : data
            })
        }).catch((error)=>{console.log(error)});
    }


    render(){
        return (<main>
            <div>
                <Featured slides={this.state.home.slider}/>
                <Subscriptions/>
                <Blocks blocks={this.state.home.blocks}/>
            </div> 
        </main>);
    }
}


export default Home;