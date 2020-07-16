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

function geometricProgression(initalValue, ratio, nthTerm) {
    // T(n) = a*(r^n-1)
    const nthValue = initalValue * Math.pow(ratio, nthTerm - 1);

    return nthValue;
}

module.exports = {
    arthimaticProgression,
    geometricProgression,
};
