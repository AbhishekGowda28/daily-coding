import React from 'react';
import {Link} from 'react-router-dom';


const Header = () =>{

    return(
        <header className="artist_header">
            <h3>
                <Link to="/" >MUSIC DB</Link>
            </h3>
        </header>);
}



export default Header;