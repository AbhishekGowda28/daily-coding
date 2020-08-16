// @ts-check

/**
 * @param {string} str
 */
function vowelsCount(str) {
    str = str.toLowerCase();
    let _vowelCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let count = 0; count < str.length; count++) {
        if (vowels.includes(str[count])) {
            _vowelCount++;
        }
    }

    return _vowelCount;
}

module.exports = vowelsCount;
