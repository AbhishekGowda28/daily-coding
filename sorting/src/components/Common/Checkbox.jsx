import React from "react";

const CheckBox = (props) => {
    let labelClassName = "checkBox";
    if (props.disabled) {
        labelClassName = "checkBox disabled";
    }
    return (
        <label className={labelClassName}>
            <input
                checked={props.checked}
                type="checkbox"
                disabled={props.disabled}
                onChange={props.onChange} />
            {props.label}
        </label>
    )
}

export default CheckBox;