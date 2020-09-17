const binaryInput = document.querySelector("input#binary");
const decimalInput = document.querySelector("input#decimal");
const error = document.querySelector("div.error");
let previousInput = "";
binaryInput.addEventListener("input", (event) => {
    error.innerHTML = "";
    const heldInput = event.target.value;
    event.target.value = previousInput;
    if (validateInput(heldInput)) {
        event.target.value = heldInput;
        previousInput = heldInput;
        decimalInput.value = convertBinaryToDecimal(heldInput);
    } else {
        error.innerHTML = "Invalid Input. Only Binary Numbers [0 or 1] are Allowed"
    }
});

function validateInput(heldInput) {
    return heldInput.length === 0 || heldInput[heldInput.length - 1] === "0" || heldInput[heldInput.length - 1] === "1" || heldInput[heldInput.length - 1] === "";
}

function convertBinaryToDecimal(binary) {
    binary = (Array.from(binary.split("")).reverse()).join("");
    let binaryLength = binary.length;
    let decimalValue = 0;
    while (binaryLength > 0) {
        const placeholderValue = binary[binaryLength - 1] * Math.pow(2, binaryLength - 1);
        decimalValue += placeholderValue;
        binaryLength--;
    }
    return decimalValue;
}
