interface ButtonInterface {
    text: string;
    onClick: () => void;
}

function Button(props: ButtonInterface) {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;
