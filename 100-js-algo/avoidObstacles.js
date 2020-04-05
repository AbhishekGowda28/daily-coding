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

    let highestJump = 0;
    let previousPoint = 0;

    for (let counter = 0; counter < inputArray.length;) {
        if (highestJump + previousPoint > inputArray[counter]) {
            previousPoint = highestJump + previousPoint;
            counter++;
        } else {
            highestJump++;
        }
    }

    return highestJump;
}

module.exports = { avoidObstacles };
