const { reverseString } = require("./utils/reverseString");

function checkPalindrome(inputString) {
    const reverseStr = reverseString(inputString);

    return inputString === reverseStr;
}

module.exports = { checkPalindrome };
