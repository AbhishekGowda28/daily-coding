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

/**
 * @param {number} integerNumber
 */
function getInteger(integerNumber) {
    integerNumber = Number(integerNumber);

    return Number(integerNumber.toString().split(".")[0]);
}

module.exports = {
    arthimaticProgression,
    getInteger
};
