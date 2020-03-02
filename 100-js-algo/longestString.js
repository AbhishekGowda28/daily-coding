function longestString(stringArray) {
    const allString = [];
    const length = stringArray.reduce((largLen, str) => {
        return largLen < str.length ? str.length : largLen;
    }, 0);
    stringArray.forEach(str => {
        if (str.length === length) {
            allString.push(str);
        }
    });
    allString;

    return allString;
}

longestString(["aba", "aa", "ad", "vcd", "aba"]);
longestString(["", "af"]);
