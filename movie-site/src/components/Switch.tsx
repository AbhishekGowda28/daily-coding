import React from "react";
import "./Switch.css";
interface SwitchProps {
    checked: boolean;
    option_1: string;
    option_2: string;
    selectedOption: Function;
}
const Switch = (props: SwitchProps) => {
    // const [checked, setChecked] = React.useState(props.checked);
    return (
        <div>
            <span>{props.option_1}</span>
            <label className="switch">
                <input type="checkbox" onClick={() => {
                    // setChecked(!checked);
                    props.selectedOption(!props.checked);
                }} />
                <span className="slider round"></span>
            </label>
            <span>{props.option_2}</span>
        </div>
    )
}

export { Switch };

