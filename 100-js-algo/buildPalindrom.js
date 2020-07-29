function buildPalindrom(inputString) {
    let isNumber = false;
    if (typeof inputString === `number`) {
        inputString = new String(inputString);
        isNumber = true;
    }
    const charactersNotAvailable = [];

    let counter = inputString.length - 1;
    for (let index = 0; index < inputString.length; index++) {
        if (inputString[index] === inputString[counter]) {
            counter--;
        } else {
            charactersNotAvailable.push(inputString[index]);
        }
    }
    let palindrom = inputString;
    counter = charactersNotAvailable.length;
    for (let index = counter; index > 0; index--) {
        palindrom += charactersNotAvailable.pop();
    }

    if (isNumber) {
        palindrom = Number(palindrom);
    }

    return palindrom;
}

module.exports = { buildPalindrom };
