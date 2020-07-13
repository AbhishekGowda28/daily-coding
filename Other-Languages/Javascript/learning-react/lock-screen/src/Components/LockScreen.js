import React from 'react';

import DisplayClock from './DisplayClock';
import { UserInfo } from './UserInfo';

import '../styles/lockscreen.css';

class LockScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "Abhishek Gowda"
        }

        this.handleUnlock = this.handleUnlock.bind(this);
    }

    handleUnlock() {
        alert('Unlocked');
    }

    render() {
        const img = '/lock.jpg';
        const style = {
            backgroundImage: `url(${img})`,
        }
        return (
            <div className="lockScreen" style={style}>
                <DisplayClock />
                <UserInfo userName={this.state.name}/>
                <button onClick={this.handleUnlock}>Unlock</button>
            </div>
        );
    }
}

export default LockScreen;