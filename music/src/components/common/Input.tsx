import React from "react";

interface InputProps {
    value: string;
    placeholder?: string;
    onChange: (input: string) => void;
}

type InputState = {
    value: string;
}

class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render() {
        return (
            <input
                onChange={(event) => {
                    this.setState({ value: event.target.value }, () => {
                        this.props.onChange(this.state.value)
                    });
                }}
            />
        )
    }

}

export default Input;