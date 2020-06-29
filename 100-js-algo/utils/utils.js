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

module.exports = {
    checkForElementInArray,
    checkForElementInObject,
    isEmpty,
    removeDuplicatesFromArray
};
