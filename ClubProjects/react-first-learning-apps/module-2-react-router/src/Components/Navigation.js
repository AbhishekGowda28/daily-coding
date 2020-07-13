import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (<nav>
        <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to="/post">POST</Link></li>
            <li><Link to="/profile">PROFILE</Link></li>
            <li><Link to="/lifecycle">LifeCycle</Link></li>
        </ul>
    </nav>);
}

export default Navigation;