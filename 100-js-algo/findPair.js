// @ts-check

/**
 * @param {number[]} arr
 * @param {number} sum
 */
function findPair(arr, sum) {
    const pairArr = [];
    arr.forEach((val, index) => {
        const inverseVal = sum - val, inverseValueIndex = arr.indexOf(inverseVal);
        if (inverseValueIndex !== -1 && inverseValueIndex !== index) {
            pairArr.push([val, inverseVal]);
            arr[index] = 0;
            arr.splice(inverseValueIndex, 1, 0);
        }
    });

    return pairArr;
}

module.exports = findPair;
