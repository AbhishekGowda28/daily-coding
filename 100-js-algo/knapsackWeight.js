/* eslint-disable max-params */
// @ts-check

/**
 * @param {number} value1
 * @param {number} weight1
 * @param {number} value2
 * @param {number} weight2
 * @param {number} maxW
 */
function knapsackWeight(value1, weight1, value2, weight2, maxW) {
    if (maxW >= (weight1 + weight2)) {
        return value1 + value2;
    } else if (weight2 > maxW && weight1 <= maxW) {
        return value1;
    } else if (weight1 > maxW && weight2 <= maxW) {
        return value2;
    } else {
        if (value1 >= value2) {
            return value1;
        }

        return value2;
    }
}

module.exports = { knapsackWeight };
