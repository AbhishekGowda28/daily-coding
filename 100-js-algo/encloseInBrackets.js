function encloseInBrackets(inputStr) {
    if (typeof inputStr === "string") {
        if (inputStr[0] === "(" && inputStr[inputStr.length - 1] === ")") {
            return inputStr;
        }
        if (inputStr[0] === "(" && inputStr[inputStr.length - 1] !== ")") {
            return inputStr + ")";
        }
        if (inputStr[0] !== "(" && inputStr[inputStr.length - 1] === ")") {
            return "(" + inputStr;
        }

        return "(" + inputStr + ")";
    }
    throw new Error("Invalid Input");
}

module.exports = { encloseInBrackets };
