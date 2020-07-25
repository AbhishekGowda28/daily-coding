// @ts-check

/**
 * @param {number[] | string[]} inputArray
 */
function closestDuplicate(inputArray) {
    let nearestElement = inputArray.length;
    let duplicateElement;
    for (let externalCounter = 0; externalCounter < inputArray.length; externalCounter++) {
        for (let internalCounter = externalCounter + 1; internalCounter < inputArray.length; internalCounter++) {
            if (inputArray[externalCounter] === inputArray[internalCounter] && internalCounter - externalCounter < nearestElement) {
                duplicateElement = inputArray[externalCounter];
                nearestElement = internalCounter - externalCounter;
            }
        }
    }

    return duplicateElement;
}

module.exports = { closestDuplicate };
