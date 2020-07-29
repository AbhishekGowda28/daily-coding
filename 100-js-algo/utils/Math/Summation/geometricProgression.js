/* eslint-disable max-params */

function geometricProgression(initalValue, ratio, nthTerm) {
    // T(n) = a*(r^n-1)
    const nthValue = initalValue * Math.pow(ratio, nthTerm - 1);

    return nthValue;
}

module.exports = {
    geometricProgression
};
