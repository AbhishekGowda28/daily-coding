// @ts-check

const utils = require("./utils/utils");

/**
 * @param {any[]} inputArray
 */
function flattenArray(inputArray) {
    const result = [];

    return utils.flattenArray(inputArray, result);
}

module.exports = { flattenArray };
