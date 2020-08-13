// @ts-check

const fibonacciNumbers = require("./utils/Math/fibonacci");

/**
 * @param {number} count
 */
function sumOddFibonacci(count) {
    return fibonacciNumbers(count).filter(num => num <= count && num % 2 !== 0).reduce((prev, curr) => prev += curr, 0);
}

module.exports = sumOddFibonacci;
