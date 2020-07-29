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

/**
 * @param {Iterable<any>} inputArray
 */
function removeDuplicatesFromArray(inputArray) {
    return Array.from(new Set(inputArray));
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

module.exports = {
    checkForElementInArray,
    checkForElementInObject,
    isEmpty,
    removeDuplicatesFromArray,
    flattenArray
};
