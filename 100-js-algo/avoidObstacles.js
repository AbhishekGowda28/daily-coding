function avoidObstacles(inputArray) {
    if (inputArray.length === 0) {
        return 0;
    }
    inputArray.sort((a, b) => a - b);

    if (inputArray[inputArray.length - 1] < 0) {
        return 1;
    }

    for (let counter = 1; counter < inputArray[inputArray.length - 1]; counter++) {
        if (inputArray.every(element => element % counter !== 0)) {
            return counter;
        }
    }

    // When the same element is repeated ; Maximum element + 1 
    return inputArray[inputArray.length - 1] + 1;
}

module.exports = { avoidObstacles };
