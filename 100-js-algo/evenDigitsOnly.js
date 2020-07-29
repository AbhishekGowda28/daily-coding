function checkForValidInput(inputNumber) {
    return typeof inputNumber === `number` || (typeof inputNumber === `string` && isNaN(Number(inputNumber)) === false);
}

function evenDigitsOnly(inputNumber) {
    if (checkForValidInput(inputNumber)) {
        inputNumber = String(inputNumber);

        return Array.from(inputNumber).every(integer => (integer === `.` || integer === `-`) ? true : (integer % 2 === 0));
    }
    throw new Error(`Invalid Input`);
}

module.exports = { evenDigitsOnly };
