function encloseInBrackets(inputStr) {
    if (typeof inputStr === "string") {
        if (inputStr[0] === "(" && inputStr[inputStr.length - 1] === ")") {
            return inputStr;
        } else if (inputStr[0] === "(" && inputStr[inputStr.length - 1] !== ")") {
            return inputStr + ")";
        } else if (inputStr[0] !== "(" && inputStr[inputStr.length - 1] === ")") {
            return "(" + inputStr;
        } else {
            return "(" + inputStr + ")";
        }
    }
    throw new Error("Invalid Input");
}

module.exports = { encloseInBrackets };
