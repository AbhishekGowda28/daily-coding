import React from "react";
import "input.css"

interface InputProps {
    type: "text" | "number",
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
export const Input = (props: InputProps) => {
    return (
        <input
            type={props.type}
            onChange={(event) => {
                props.onChange(event);
            }}
        />
    )
}