// @ts-check

const { binaryToDecimal } = require("./numeric-conversion/binaryToDecimal");

/**
 * @param {string} encryptedCode
 */
function messageFromBinaryCode(encryptedCode) {
    let codeSeperator = "";
    for (let counter = 1; counter < encryptedCode.length;) {
        const subStr = encryptedCode.substring(counter - 1, counter + 7);
        codeSeperator += String.fromCharCode(binaryToDecimal(subStr));
        counter += 8;
    }

    return codeSeperator;
}

module.exports = { messageFromBinaryCode };
