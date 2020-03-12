function alphabeticShift(inputString) {
    if (inputString.length < 1) {
        return "Please provide input";
    }

    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let outputString = "";

    for (let index = 0; index < inputString.length; index++) {
        const alphabetIndex = alphabets.indexOf(inputString[index]);
        if (alphabetIndex === -1) {
            return "Input is not alphabet";
        }
        outputString += alphabets[(alphabetIndex + 1) % alphabets.length];
    }

    return outputString;
}

module.exports = { alphabeticShift };
