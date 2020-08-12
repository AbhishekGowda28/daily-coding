// @ts-check

/**
 * @param {number[]} initalArr
 * @param {number[]} seekValues
 */
function seekAndDestroy(initalArr, seekValues) {
    return initalArr.filter(val => !seekValues.includes(val));
}

module.exports = seekAndDestroy;
