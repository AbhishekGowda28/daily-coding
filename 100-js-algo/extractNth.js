// @ts-check

/**
 * @param {number[]} inputArray
 * @param {number} n
 */
function validateInput(inputArray, n) {
    return Array.isArray(inputArray) && n > 0;
}

/**
 * @param {number[]} inputArray
 * @param {number} n
 */
function extractNth(inputArray, n) {
    if (validateInput(inputArray, n)) {
        return inputArray.filter((_, index) => ((index + 1) % n !== 0));
    }
    throw new Error(`Invalid Input`);
}

module.exports = { extractNth };
