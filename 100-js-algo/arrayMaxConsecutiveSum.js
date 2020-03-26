function arrayMaxConsecutiveSum(inputArray, steps) {
    if (steps <= 0) {
        return "Steps has to be positive integer";
    }
    if (inputArray.length === 0) {
        return "Array cannot be empty";
    }
    if (steps > inputArray.length) {
        return "Steps size cannot be more than the array length"
    }

    let finalSum = 0;

    for (let index = 0; index < inputArray.length; index++) {
        let intermediateSum = 0;
        for (let count = 0; count < steps; count++) {
            intermediateSum += inputArray[index + count];
        }
        if (finalSum < intermediateSum) {
            finalSum = intermediateSum;
        }
    }

    return finalSum;
}

module.exports = { arrayMaxConsecutiveSum };
