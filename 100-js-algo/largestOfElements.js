// @ts-check

/**
 * @param {number[][]} arr
 */
function largestOfElements(arr) {
    return arr.map((ele) => ele.reduce((prev, curr) => curr > prev ? curr : prev, 0));
}

module.exports = { largestOfElements };
