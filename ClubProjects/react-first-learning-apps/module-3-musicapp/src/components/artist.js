import React from 'react';


import Header from './header'
import AlbumList from './albumList';

const URL_ARTISTS = "http://localhost:3001/artists";

class Artist extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            artist : ''
        };
    }

    // Fetching data from the database
    componentDidMount() {

        // console.log(this.props.match.params.artistId);

        fetch(`${URL_ARTISTS}/${this.props.match.params.artistId}`, {
            method: 'GET'
        }).then(function (response, reject) {
            if (response.ok) return response.json();
        }).then((data) => {
            this.setState({
                artist: data
            });
            console.log(this.state)
        }).catch(function (error) {
            console.log(error);
        });
    }



    render(){
        return (
                <div>
                    <Header/>
                    <div className="artist_bio">
                        <div className="avatar">
                            <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                        </div>
                        <div className="bio">
                            <h3>
                                {this.state.artist.name}
                            </h3>
                            <div className="bio_text">
                                {this.state.artist.bio}
                            </div>
                        </div>
                    <AlbumList albumList={this.state.artist.albums}/>
                    </div>
                </div>);
    }
 }

 export default Artist;