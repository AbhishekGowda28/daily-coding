// @ts-check

const { reverseString } = require("./utils/reverseString");

/**
 * @param {string} inputString
 */
function reverseParentheses(inputString) {
    const regex = /(.*?)\(([a-zA-Z0-9_]*)\)(.*)/;
    let result = regex.exec(inputString);
    while (result !== null) {
        inputString = result[1] + reverseString(result[2]) + result[3];
        result = regex.exec(inputString);
    }

    return inputString;
}

module.exports = { reverseParentheses };
