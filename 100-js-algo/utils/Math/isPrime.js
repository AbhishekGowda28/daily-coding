const { getPrimeNumbers } = require("./getPrimeNumbers");

function isNumberValid(number) {
    return typeof number == "number" && (number < 0 || number > 1);
}

function checkForNegativeNumbers(number) {
    if (number < 0) {
        number *= -1;
    }

    return number;
}
function isPrime(number) {
    if (isNumberValid(number)) {
        number = checkForNegativeNumbers(number);
        const primeNumbersInRange = getPrimeNumbers(2, number);
        if (primeNumbersInRange.includes(number)) {
            return true;
        }

        return false;
    }
    throw new Error("Invalid Input");
}

module.exports = { isPrime };
