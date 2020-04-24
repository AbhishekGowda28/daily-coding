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

module.exports = {
    checkForElementInArray,
    checkForElementInObject
};
