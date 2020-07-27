// @ts-check
/**
 * @param {string} inputNumber
 */
function rootNumber(inputNumber) {
    /**
     * @param {number} prev
     * @param {string} curr
     */
    return inputNumber.split("").reduce((prev, curr) => {
        return prev += Number(curr);
    }, 0) % 9;
}

module.exports = { rootNumber };
