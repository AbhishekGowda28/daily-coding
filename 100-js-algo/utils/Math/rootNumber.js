// @ts-check
/**
 * @param {string} inputNumber
 */
function rootNumberSum(inputNumber) {
    /**
     * @param {number} prev
     * @param {string} curr
     */
    return inputNumber.split("").reduce((prev, curr) => {
        return prev += Number(curr);
    }, 0) % 9;
}

/**
 * @param {string} inputNumber
 */
function rootNumberProduct(inputNumber) {
    /**
     * @param {number} prev
     * @param {string} curr
     */
    return inputNumber.split("").reduce((prev, curr) => {
        return prev *= Number(curr);
    }, 1) % 9;
}

module.exports = { rootNumberProduct, rootNumberSum };
