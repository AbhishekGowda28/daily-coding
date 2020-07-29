// eslint-disable-next-line max-params
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    let index = inputArray.indexOf(elemToReplace);
    if (substitutionElem !== ``) {
        while (index !== -1) {
            inputArray[index] = substitutionElem;
            index = inputArray.indexOf(elemToReplace);
        }
    }

    return inputArray;
}

module.exports = { arrayReplace };
