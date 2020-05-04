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

function getInteger(integerNumber) {
    integerNumber = Number(integerNumber);

    return Number(integerNumber.toString().split(".")[0]);
}

module.exports = {
    checkForElementInArray,
    checkForElementInObject,
    getInteger
};
