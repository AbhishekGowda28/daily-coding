import React from "react";

interface ButtonInterface {
    text: string;
    onClick: () => void;
}

class Button extends React.Component<ButtonInterface> {
    constructor(props: ButtonInterface) {
        super(props);
    }

    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

export default Button;
