// @ts-check

const { reverse } = require("./utils/string");

/**
 * @param {string} inputString
 */
function reverseParentheses(inputString) {
    // const parentheseRegex = /\((.*)\)/;
    // const intermediateStr = inputString;
    // let result = parentheseRegex.exec(intermediateStr);
    // console.log(result);
    // let endStr = "";
    // while (result !== null) {
    //     console.log("begining", result);
    //     endStr += intermediateStr.split("(")[0];
    //     endStr += reverse(result[1]);
    //     endStr += intermediateStr.substring(intermediateStr.lastIndexOf(")") + 1);
    //     result = parentheseRegex.exec(endStr);
    //     console.log("end", result, endStr);
    // }
    // return endStr;

    const regex = /(.*?)\((.*)\)(.*)/;
    while (regex.test(inputString)) {
        const result = regex.exec(inputString);
        inputString = result[1] + reverse(result[2]) + result[3];
    }

    return inputString;
}

console.log(reverseParentheses("a(bc)d"));

console.log(reverseParentheses("((a(bc)d))"));

module.exports = { reverseParentheses };
