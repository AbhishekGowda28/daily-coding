/* eslint-disable max-params */

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

module.exports = { arthimaticProgression };
