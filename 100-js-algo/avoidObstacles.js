function avoidObstacles(inputArray) {
    if (inputArray.length === 0) {
        return 0;
    }
    inputArray.sort((a, b) => {
        return (a - b);
    });
    if (inputArray[inputArray.length - 1] < 0) {
        return 1;
    }

    return inputArray.length;
}

module.exports = { avoidObstacles };
