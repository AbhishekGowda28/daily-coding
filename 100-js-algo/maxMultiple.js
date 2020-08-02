// @ts-check

const { getInteger } = require("./utils/Math/getInteger");

/**
 * @param {number} divisor
 * @param {number} bound
 */
function maxMultiple(divisor, bound) {
    const quotient = getInteger(bound / divisor);

    return divisor * quotient;
}

module.exports = { maxMultiple };
