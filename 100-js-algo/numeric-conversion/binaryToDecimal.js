// @ts-check

/**
 * @param {string} numeric
 */
function binaryToDecimal(numeric) {
    let value = 0;
    const base = 2;
    for (let counter = 0; counter < numeric.length; counter++) {
        let baseValue = 0;
        if (Number(numeric[counter]) !== 0) {
            baseValue = Math.pow(base, numeric.length - 1 - counter);
        }
        value += baseValue;
    }

    return value;
}

module.exports = { binaryToDecimal };
