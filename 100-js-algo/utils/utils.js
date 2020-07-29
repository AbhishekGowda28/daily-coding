// @ts-check

/**
 * @param {any[]} array
 * @param {any} element
 * @returns boolean
 */
function checkForElementInArray(array, element) {
    return array.includes(element);
}

/**
 * @param {object} object
 * @param {string} element
 */
function checkForElementInObject(object, element) {
    const data = object[element];

    return data === undefined ? false : true;
}

function isEmpty(object) {
    if (object !== undefined) {
        if (object !== null) {
            if (JSON.stringify(object) !== "{}") {
                if (object.length !== 0) {
                    return false;
                }
            }
        }
    }

    return true;
}

function removeDuplicatesFromArray(inputArray) {
    const set = new Set(inputArray);

    return Array.from(set);
}

/**
 * @param {any[]} array
 * @param {any[]} result
 */
function flattenArray(array, result) {
    array.forEach((element) => {
        if (Array.isArray(element)) {
            element = flattenArray(element, result);
        } else {
            result.push(element);
        }
    });

    return result;
}

function isDigit(inputCharacter) {
    if (typeof inputCharacter === "string" && inputCharacter.length > 0) {
        inputCharacter = Number(inputCharacter);
    }

    return typeof inputCharacter === "number" && !isNaN(inputCharacter);
}

module.exports = {
    checkForElementInArray,
    checkForElementInObject,
    isEmpty,
    removeDuplicatesFromArray,
    flattenArray,
    isDigit
};
