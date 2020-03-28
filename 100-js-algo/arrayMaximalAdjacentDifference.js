function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = 0;
    for (let index = 0; index < inputArray.length - 1; index++) {
        const diff = Math.abs(inputArray[index] - inputArray[index + 1]);
        maxDiff = diff > maxDiff ? diff : maxDiff;
    }

    return maxDiff;
}

module.exports = { arrayMaximalAdjacentDifference };
