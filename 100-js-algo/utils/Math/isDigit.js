// @ts-check
/**
 * @param {string | number | any[]} inputCharacter
 */
function isDigit(inputCharacter) {
    if (typeof inputCharacter === "string" && inputCharacter.length > 0) {
        inputCharacter = Number(inputCharacter);
    }

    return typeof inputCharacter === "number" && !isNaN(inputCharacter);
}

module.exports = { isDigit };
