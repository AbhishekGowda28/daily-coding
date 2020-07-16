function evenDigitsOnly(inputNumber) {
    if (typeof inputNumber === "number" || typeof inputNumber === "string") {
        if (isNaN(Number(inputNumber))) {
            throw new Error("Invalid Input");
        }
        inputNumber = String(inputNumber);

        return Array.from(inputNumber).every(integer => (integer === "." || integer === "-") ? true : (integer % 2 === 0));
    } else {
        throw new Error("Invalid Input");
    }
}

module.exports = { evenDigitsOnly };
