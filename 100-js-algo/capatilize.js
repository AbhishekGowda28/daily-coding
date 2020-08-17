// @ts-check

/**
 * @param {string} word
 */
function capatilize(word) {
    const firstLetter = word[0].toUpperCase();
    const rest = word.substr(1).toLowerCase();

    return firstLetter + rest;
}

module.exports = capatilize;
