function arrayChange(inputArray) {
    let count = 0;
    for (let index = 0; index < inputArray.length - 1;) {
        if (inputArray[index] < inputArray[index + 1]) {
            index++;
        } else {
            inputArray[index + 1]++;
            count++;
        }
    }

    return count;
}

module.exports = { arrayChange };
