/* eslint-disable max-params */
//@ts-check

/**
 * @param {number} initalValue
 * @param {number} difference
 * @param {number} nthTerm
 */
function arthimaticProgression(initalValue, difference, nthTerm) {
    // T(n) = a + (n-1)*d
    const nthValue = ((nthTerm - 1) * difference) + initalValue;

    return nthValue;
}

function geometricProgression(initalValue, ratio, nthTerm) {
    // T(n) = a*(r^n-1)
    const nthValue = initalValue * Math.pow(ratio, nthTerm - 1);

    return nthValue;
}

/**
 * @param {number} integerNumber
 */
function getInteger(integerNumber) {
    integerNumber = Number(integerNumber);

    return Number(integerNumber.toString().split(".")[0]);
}

function factorial(number) {
    let result = 1;
    while (number > 0) {
        result *= number;
        number--;
    }

    return result;
}

module.exports = {
    arthimaticProgression,
    geometricProgression,
    getInteger,
    factorial
};
