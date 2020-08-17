// @ts-check

/**
 * @param {string} str
 */
function reflectionString(str) {
    let outPut = "";
    str.split("").forEach((char) => {
        const charValue = char.codePointAt(0);
        let range = 96;
        if (charValue >= 65 && charValue <= 90) {
            range = 64;
        }
        const subVal = charValue - range;
        outPut += String.fromCodePoint(range + 1 + (26 - subVal));
    });

    return outPut;
}

module.exports = reflectionString;
