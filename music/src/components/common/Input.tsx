interface InputProps {
    value: string;
    placeholder?: string;
    onChange: (input: string) => void;
}

function Input(props: InputProps) {

    return (
        <input onChange={(event) => { props.onChange(event.target.value); }} />
    )
}

export default Input;
