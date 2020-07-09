import React from "react";

const Button = props => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}
export default Button;