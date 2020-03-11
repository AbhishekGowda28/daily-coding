function longestString(stringArray) {
    let allLongestString = [];
    stringArray.forEach(str => {
        const currentLongestString = allLongestString.length > 0 ?
            allLongestString[0] : "";
        if (str.length > currentLongestString.length) {
            allLongestString = [str];
        } else if (str.length === currentLongestString.length) {
            allLongestString.push(str);
        }
    });

    return allLongestString;
}

longestString(["aba", "aa", "ad", "vcd", "aba"]);
longestString(["", "af"]);

module.exports = {
    longestString
};