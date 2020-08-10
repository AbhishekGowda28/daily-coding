// @ts-check

/**
 * @param {string} inputStr
 */
function longestDigitsPrefix(inputStr) {
    const result = inputStr.split(/[^\d]/);
    let longestStr = "";
    for (let count = 0, length = 0; count < result.length; count++) {
        if (result[count].length > length) {
            length = result[count].length;
            longestStr = result[count];
        }
    }

    return longestStr;
}

module.exports = { longestDigitsPrefix };
