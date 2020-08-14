/* eslint-disable max-params */
// @ts-check

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
 * @param {number} initalTerm
 * @param {number} difference
 * @param {number} nthTerm
 */
function arthimaticSummation(initalTerm, difference, nthTerm) {
    return (nthTerm / 2) * (2 * initalTerm + ((nthTerm - 1) * difference));
}

module.exports = { arthimaticProgression, arthimaticSummation };
