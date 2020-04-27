const { reverse } = require("./utils/string");

function checkPalindrome(inputString) {
    const reverseStr = reverse(inputString);

    return inputString === reverseStr;
}

module.exports = { checkPalindrome };
