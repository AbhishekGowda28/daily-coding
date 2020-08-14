// @ts-check

/**
 * @param {number[]} arr
 * @param {number} shallowValue
 */
function sortByHeight(arr, shallowValue) {
    const sortedArr = arr.filter(val => val !== shallowValue).sort();
    let initalIndex = 0;

    return arr.map((val) => {
        if (val !== shallowValue) {
            return sortedArr[initalIndex++];
        }

        return val;
    });
}

module.exports = sortByHeight;
