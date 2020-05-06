const { reverse } = require("./utils/String");

function checkPalindrome(inputString) {
    const reverseStr = reverse(inputString);

    return inputString === reverseStr;
}

module.exports = { checkPalindrome };
