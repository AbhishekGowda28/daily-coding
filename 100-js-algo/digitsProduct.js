const { isPrime } = require("./utils/Math/isPrime");
const { getPrimeNumbers } = require("./utils/Math/getPrimeNumbers");

function digitsProduct(inputNumber) {
    if (typeof inputNumber === "number") {
        if (isPrime(inputNumber)) {
            return -1;
        } else {
            if (inputNumber < 0) {
                inputNumber *= -1;
            }
            const primes = getPrimeNumbers(2, inputNumber);
            for (let counter = 0; counter < primes.length - 1; counter++) {
                const element = primes[counter];
                if (inputNumber % element === 0) {
                    return Number(`${element}${inputNumber / element}`);
                }
            }
        }
    }
    throw new Error("Invalid Input");
}

module.exports = { digitsProduct };
