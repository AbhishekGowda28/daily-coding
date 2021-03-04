import React from "react";

interface ButtonInterface {
    text: string;
    onClick: () => void;
}

class Button extends React.Component<ButtonInterface> {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

export default Button;
