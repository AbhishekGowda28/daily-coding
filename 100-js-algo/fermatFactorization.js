// @ts-check

const { isSquare } = require(`./utils/Math/isSquare`);

/**
 * @param {number} number
 */
function fermatFactorization(number) {
    let firstNumber = Math.ceil(Math.sqrt(number));
    let secondNumber = firstNumber * firstNumber - number;
    while (isSquare(secondNumber) === false) {
        firstNumber = firstNumber + 1;
        secondNumber = firstNumber * firstNumber - number;
    }

    return [firstNumber, Math.sqrt(secondNumber)];
}

module.exports = { fermatFactorization };
