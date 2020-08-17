// @ts-check

/**
 * @param {number[]} arr
 */
function uniqueDigitProducts(arr) {
    return require("./utils/utils").removeDuplicatesFromArray(arr.map(e => String(e).split("").reduce((prev, curr) => prev *= Number(curr), 1))).length;
}

module.exports = uniqueDigitProducts;
