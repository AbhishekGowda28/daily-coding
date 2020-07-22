// @ts-check

/**
 * @param {number[]} inputArray
 * @param {number} sum
 */
function findClosestPair(inputArray, sum) {
    let closedPair = -1;
    for (let externalCounter = 0; externalCounter < inputArray.length; externalCounter++) {
        for (let internalCounter = externalCounter + 1; internalCounter < inputArray.length; internalCounter++) {
            if (inputArray[externalCounter] + inputArray[internalCounter] === sum) {
                closedPair = internalCounter - externalCounter;
            }
        }
    }

    return closedPair;
}

module.exports = { findClosestPair };
