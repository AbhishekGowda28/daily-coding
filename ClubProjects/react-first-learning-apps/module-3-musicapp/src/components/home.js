import React from 'react';


import Banner from './banner'
import ArtistsList from './artistList';


const URL_ARTISTS = "http://localhost:3001/artists";

class Home extends React.Component{
    constructor(props){
        super(props);
       this.state = {
           artist : ''
       };
    }
    
    componentDidMount(){
        fetch(URL_ARTISTS,{
            method : 'GET'
        }).then(function(response, reject){
            if(response.ok) return response.json();
        }).then((data)=>{
            this.setState({
                artist : data
            });
            console.log(this.state)
        }).catch(function(error){
            console.log(error);
        });
    }


    render(){
        return(<div>
        <Banner/>
        <ArtistsList allArtists={this.state.artist}/>
    </div>);}

    
}

export default Home;