// @ts-check

/**
 * @param {number} num
 */
function sumAllPrimes(num) {
    return require("./utils/Math/getPrimeNumbers").getPrimeNumbers(2, num).reduce((prev, curr) => prev += curr, 0);
}

module.exports = sumAllPrimes;
