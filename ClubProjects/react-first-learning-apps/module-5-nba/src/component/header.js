import React from 'react';
import {BrowserRouter ,Link} from 'react-router-dom';

const Header = () =>{
    return (<BrowserRouter>
        <header>
            <div className="flexbox-container">
                <Link to='/' className='logo'>
                    <span></span>
                </Link>
                <nav>
                    <Link to='/teams'>Teams</Link>
                </nav>
            </div>
        </header>
    </BrowserRouter>);
}


export default Header;


