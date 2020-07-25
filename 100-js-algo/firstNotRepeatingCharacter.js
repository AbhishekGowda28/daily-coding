// @ts-check

/**
 * @param { string } inputString
 */
function firstNotRepeatingCharacter(inputString) {
    for (let counter = 0; counter < inputString.length; counter++) {
        const str = inputString.charAt(counter);
        if (inputString.indexOf(str) === counter && inputString.indexOf(str, counter + 1) === -1) {
            return str;
        }
    }
}

module.exports = { firstNotRepeatingCharacter };
