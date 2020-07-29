// @ts-check

const utils = require(`./utils/utils`);
/**
 * @param {number[]} inputArray
 */
function houseNumbersSum(inputArray) {
    const flattenResult = [];
    const flatten = utils.removeDuplicatesFromArray(utils.flattenArray(inputArray, flattenResult));

    return flatten.reduce((previousValue, currentValue) => {
        previousValue += currentValue;

        return previousValue;
    }, 0);
}

module.exports = { houseNumbersSum };
