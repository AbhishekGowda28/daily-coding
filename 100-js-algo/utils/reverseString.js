/**
 * 
 * @param {string} inputStr 
 */
function reverseString(inputStr) {
    return inputStr.split("").reverse().join("");
}

module.exports = { reverseString };
