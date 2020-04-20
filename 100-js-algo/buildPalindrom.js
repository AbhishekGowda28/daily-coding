function buildPalindrom(inputString) {
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

    return palindrom;
}

module.exports = { buildPalindrom };
