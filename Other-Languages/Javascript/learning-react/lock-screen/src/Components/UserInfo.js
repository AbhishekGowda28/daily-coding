import React from 'react';

export class UserInfo extends React.Component {
    render() {
        return (
            <div className="userName">{this.props.userName}</div>
        )
    }
}