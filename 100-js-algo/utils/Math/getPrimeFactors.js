const { getPrimeNumbers } = require("./getPrimeNumbers");

function getPrimeFactors(inputNumber) {
    if (typeof inputNumber === "number") {
        if (inputNumber < 0) {
            inputNumber *= -1;
        }
        if (inputNumber !== 0 && inputNumber !== 1) {
            const primes = getPrimeNumbers(2, inputNumber);
            const products = [];
            primes.forEach((prime) => {
                if (inputNumber % prime === 0) {
                    products.push(prime);
                }
            });

            return products;
        } else {
            throw new Error("Invalid Input");
        }
    } else {
        throw new Error("Invalid Input");
    }
}

module.exports = { getPrimeFactors };
