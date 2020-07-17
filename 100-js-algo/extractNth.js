function extractNth(inputArray, n) {
    if (Array.isArray(inputArray) && n > 0) {
        return inputArray.filter((element, index) => {
            if ((index + 1) % n !== 0) {
                return element;
            }
        });
    } else {
        throw new Error("Invalid Input");
    }
}

module.exports = { extractNth };
