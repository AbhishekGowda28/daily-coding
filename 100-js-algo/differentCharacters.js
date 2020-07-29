const { removeDuplicatesFromArray } = require(`./utils/utils`);

function differentCharacters(inputString) {
    return removeDuplicatesFromArray(inputString).length;
}

module.exports = { differentCharacters };
