// @ts-check

/**
 * @param {string[]} allLongestString
 * @param {string} str
 */
function extractLongestString(allLongestString, str) {
    const currentLongestString = allLongestString.length > 0 ?
        allLongestString[0] : ``;
    if (str.length > currentLongestString.length) {
        allLongestString = [str];
    } if (str.length === currentLongestString.length) {
        allLongestString.push(str);
    }

    return allLongestString;
}

/**
 * @param {string[]} stringArray
 * @returns {string[]}
 */
function longestString(stringArray) {
    let allLongestString = [];
    /**
     * @param {string} str
     */
    stringArray.forEach(str => {
        allLongestString = extractLongestString(allLongestString, str);
    });

    return allLongestString;
}

module.exports = {
    longestString
};
