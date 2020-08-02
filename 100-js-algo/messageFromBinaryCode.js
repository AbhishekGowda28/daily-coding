// @ts-check

/**
 * @param {string} encryptedCode
 */
function messageFromBinaryCode(encryptedCode) {
    // console.log(encryptedCode.length);
    // const e = encryptedCode.split("", 8);
    // console.log({ e, encryptedCode });
    let codeSeperator = [];
    for (let counter = 1; counter < encryptedCode.length;) {
        codeSeperator.push(encryptedCode.substring(counter - 1, counter + 7));
        counter += 8;
    }
    console.log(codeSeperator);
}

module.exports = { messageFromBinaryCode };
