// @ts-check

const { reverse } = require("./utils/string");

/**
 * @param {string} inputString
 */
function reverseParentheses(inputString) {
    const regex = /(.*?)\(([a-zA-Z0-9_]*)\)(.*)/;
    let result = regex.exec(inputString);
    while (result !== null) {
        inputString = result[1] + reverse(result[2]) + result[3];
        result = regex.exec(inputString);
    }

    return inputString;
}

module.exports = { reverseParentheses };
