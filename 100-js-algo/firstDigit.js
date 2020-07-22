function firstDigit(inputString) {
    const numberRegex = /(\d)/;
    const result = numberRegex.exec(inputString);
    if (result === null) {
        return result;
    }

    return result[0];
}

module.exports = { firstDigit };
