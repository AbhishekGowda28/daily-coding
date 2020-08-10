// @ts-check

/**
 * @param {string} str
 */
function getStr(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(str[0])) {
        return str + "way";
    }
    while (!vowels.includes(str[0])) {
        str = str.slice(1) + str[0];
    }

    return str + "ay";
}

/**
 * @param {string} str
 */
function pigLatin(str) {
    if (str.length > 0) {
        return getStr(str);
    }

    return str;
}

module.exports = { pigLatin };
