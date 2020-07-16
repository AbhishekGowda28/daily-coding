const { getPrimeNumbers } = require("./getPrimeNumbers");

function isPrime(number) {
    if (typeof number == "number" && number > 1) {
        const primeNumbersInRange = getPrimeNumbers(2, number);
        if (primeNumbersInRange.includes(number)) {
            return true;
        } else {
            return false;
        }
    } else {
        throw new Error("Invalid Input");
    }
}

module.exports = { isPrime };
