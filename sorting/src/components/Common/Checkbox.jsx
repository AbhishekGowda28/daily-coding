import React from "react";

const CheckBox = (props) => {
    return (
        <label className={props.disabled ? "checkBox disabled" : "checkBox"}>
            <input
                checked={props.checked}
                type="checkbox"
                disabled={props.disabled}
                onChange={props.onChange} />
            <span>{props.label}</span>
        </label>
    )
}

export default CheckBox;