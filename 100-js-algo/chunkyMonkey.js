/**
 * @param {string[]} dataArray
 * @param {number} splitCount
 */
function chunkyMonkey(dataArray, splitCount) {
    if (splitCount < 1) {
        return `Split count has to be greater than 0`;
    }
    const splitArray = [];

    for (let startIndex = 0; startIndex < dataArray.length;) {
        splitArray.push(dataArray.slice(startIndex, startIndex + splitCount));
        startIndex += splitCount;
    }

    return splitArray;
}

module.exports = { chunkyMonkey };
